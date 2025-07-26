import { Component, OnInit, signal } from '@angular/core';
import { Wod } from '../../interfaces/wod.interface';
import { WodService } from '../../services/wod/wod.service';
import { delay } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-wod-list',
    imports: [],
    templateUrl: './wod-list.component.html',
    styleUrl: './wod-list.component.scss'
})
export class WODListComponent implements OnInit {
    wods = signal<Wod[]>([]);
    isLoading = signal(true);

    constructor(private wodService: WodService) { }

    ngOnInit(): void {
        this.loadWODs();
    }

    loadWODs() {
        this.wodService.getWods()
            .pipe(delay(2000))
            .subscribe({
                next: (data) => {
                    console.log('endedd');
                    this.isLoading.set(false);
                    this.wods.set(data);
                },
                error: (err) => {
                    this.isLoading.set(false);
                    console.error('Error loading WODs:', err);
                }
            });
    }
    
    onEdit(wod: Wod) {
        console.log('editinggggg ', wod.id);
        this.wodService.editWod(wod.id, wod).subscribe({
            next: (updatedWod) => {
                console.log('Item updated successfully', updatedWod);
            },
            error: (err) => {
                console.error('Error updating wod: ', err);
            }
        })  
    }

    onDelete(wodId: string) {
        this.wodService.deleteWod(wodId).subscribe({
            next: (deletedWod) => {
                console.log('Item deleted successfully', deletedWod);
            },
            error: (err) => {
                console.error('Error updating wod: ', err);
            }
        })      }
}
