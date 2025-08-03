import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WodsService } from '../../services/wods.service';
import { Wod } from '../../interfaces/wod.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../../interfaces/exercise.interface';
import { ExercisesService } from '../../services/exercises.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
    standalone: true,
    selector: 'app-wod-form',
    imports: [ReactiveFormsModule, CommonModule, MatSelectModule],
    templateUrl: './wod-form.component.html',
    styleUrl: './wod-form.component.scss'
})
export class WODFormComponent implements OnInit {
    private wodService = inject(WodsService);
    private exercisesService = inject(ExercisesService);

    private route = inject(ActivatedRoute);
    private router = inject(Router);

    wodId = signal<string | null>(null);
    isEditMode = computed(() => !!this.wodId());
    wod = signal<Wod | null>(null);

    exercises = signal<Exercise[] | null>(null);

    form = new FormGroup({
        name: new FormControl(''),
        type: new FormControl(''),
        exerciseId: new FormControl(null, Validators.required)
        // isDone: new FormControl(false),
    });

    ngOnInit(): void {
        this.exercisesService.getExercises().subscribe(exercises => {
            this.exercises.set(exercises);
        });

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.wodId.set(id);
            this.loadWod(id);
        }
    }

    private loadWod(id: string) {
        this.wodService.getWodById(id).subscribe({
            next: (data) => {
                console.log(data);
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
                    this.form.setValue({ name: '', type: '', exerciseId: null });
                    this.router.navigate(['/admin']);
                },
                error: (err) => {
                    console.error('Error saving wod: ', err)
                }
            })
        } else {
            this.wodService.createWod(wod).subscribe({
                next: (res) => {
                    console.log('WOD created successfully: ', res);
                    this.router.navigate(['/admin']);
                },
                error: (err) => {
                    console.error('Error saving wod: ', err)
                }
            });
        }
    }
}
