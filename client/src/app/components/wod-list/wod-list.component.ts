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
    isLoading = signal(false);

    constructor(private wodService: WodService) { }

    ngOnInit(): void {
        this.isLoading.set(true);
        this.loadWODs();
    }

    loadWODs() {
        this.wodService.getWods()
        .pipe(delay(2000))
        .subscribe({
            next: (data) => {
                this.wods.set(data);
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Error loading WODs:', err);
                this.isLoading.set(false);
            }
        });
    }
}
