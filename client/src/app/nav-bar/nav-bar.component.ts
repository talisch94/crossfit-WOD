import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [MatIconModule, RouterModule, MatMenuModule, MatButtonModule, MatIconModule, CommonModule ],
    templateUrl: './nav-bar.component.html',
})
export class NavbarComponent {
    mobileOpen = signal(false);
    user;

    constructor(private store: Store) {
        this.user = toSignal(this.store.select(selectUser), { initialValue: null });
    }

    // toggleMobile() {
    //     this.mobileOpen.update(o => !o);
    // }
}
