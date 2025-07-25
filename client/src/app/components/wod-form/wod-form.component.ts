import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WodService } from '../../services/wod/wod.service';

@Component({
    standalone: true,
    selector: 'app-wod-form',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './wod-form.component.html',
    styleUrl: './wod-form.component.scss'
})
export class WODFormComponent {
    private wodService = inject(WodService);

    form = new FormGroup({
        name: new FormControl(''),
        type: new FormControl(''),
        // isDone: new FormControl(false),
    });

    saveWOD(): void {
        this.wodService.submitWod(
            this.form.value.name ?? '',
            this.form.value.type ?? ''
        ).subscribe({
            next: (res) => {
                console.log('WOD savedddd: ', res);
            },
            error: (err) => {
                console.error('Error saving wod: ', err)
            }
        })
    }
}
