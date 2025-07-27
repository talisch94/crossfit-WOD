import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [MatIconModule, RouterModule],
    templateUrl: './nav-bar.component.html',
})
export class NavbarComponent {
    mobileOpen = signal(false);

    toggleMobile() {
        this.mobileOpen.update(o => !o);
    }
}
