import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WodService } from '../../services/wod/wod.service';
import { Wod } from '../../interfaces/wod.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-wod-form',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './wod-form.component.html',
    styleUrl: './wod-form.component.scss'
})
export class WODFormComponent implements OnInit {
    private wodService = inject(WodService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    wodId = signal<string | null>(null);
    isEditMode = computed(() => !!this.wodId());
    wod = signal<Wod | null>(null);

    form = new FormGroup({
        name: new FormControl(''),
        type: new FormControl(''),
        // isDone: new FormControl(false),
    });

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.wodId.set(id);
            this.loadWod(id);
        }
    }

    private loadWod(id: string) {
        this.wodService.getWodById(id).subscribe({
            next: (data) => {
                this.wod.set(data as Wod);
                this.form.patchValue(data);
            },
            error: (err) => {
                console.error('Failed to fetch WOD', err);
            },
        });
    }

    saveWOD(): void {
        if (this.form.invalid) return;

        const wodData = this.form.value;
        const wod = ({ name: wodData.name ?? 'Name', type: wodData.type ?? 'Type' }) as Wod;

        if (this.isEditMode()) {
            this.wodService.updateWod(this.wodId()!, wod).subscribe({
                next: (res) => {
                    console.log('WOD updated successfully: ', res);
                    this.form.setValue({ name: '', type: '' });
                    this.router.navigate(['/wod-list']);
                },
                error: (err) => {
                    console.error('Error saving wod: ', err)
                }
            })
        } else {
            this.wodService.createWod(wod).subscribe({
                next: (res) => {
                    console.log('WOD created successfully: ', res);
                    this.router.navigate(['/wod-list']);
                },
                error: (err) => {
                    console.error('Error saving wod: ', err)
                }
            });
        }
    }
}
