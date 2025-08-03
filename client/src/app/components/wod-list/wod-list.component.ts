import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WodsService } from '../../services/wods.service';
import { Store } from '@ngrx/store';
import { loadWods } from '../../store/wods.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectWods, selectWodsLoading } from '../../store/wods.selector';

@Component({
    standalone: true,
    selector: 'app-wod-list',
    imports: [],
    templateUrl: './wod-list.component.html',
    styleUrl: './wod-list.component.scss'
})
export class WODListComponent implements OnInit {
    private store = inject(Store);
    private wodsService = inject(WodsService);
    private router = inject(Router);

    wods = toSignal(this.store.select(selectWods), { initialValue: [] });
    isLoading = toSignal(this.store.select(selectWodsLoading), { initialValue: false });


    ngOnInit(): void {
        this.store.dispatch(loadWods());
    }

    onEdit(wodId: string) {
        this.router.navigate([`wod/${wodId}`]);
    }

    onDelete(wodId: string) {
        this.wodsService.deleteWod(wodId).subscribe({
            next: (deletedWod) => {
                console.log('Item deleted successfully', deletedWod);
            },
            error: (err) => {
                console.error('Error updating wod: ', err);
            }
        });
    }
}
