import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Wod } from '../../interfaces/wod.interface';
import { WodService } from '../../services/wod/wod.service';

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

    constructor(private wodService: WodService, private router: Router) { }

    ngOnInit(): void {
        this.loadWODs();
    }

    loadWODs() {
        this.wodService.getWods()
            .pipe(delay(2000))
            .subscribe({
                next: (data) => {
                    this.isLoading.set(false);
                    this.wods.set(data);
                },
                error: (err) => {
                    this.isLoading.set(false);
                    console.error('Error loading WODs:', err);
                }
            });
    }
    
    onEdit(wodId: string) {
        this.router.navigate([`wods/${wodId}`]); 
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
