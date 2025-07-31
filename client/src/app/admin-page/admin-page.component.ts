import { Component, inject } from '@angular/core';
import { WODListComponent } from '../components/wod-list/wod-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-page',
    imports: [WODListComponent, MatButtonModule, MatIconModule],
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
    
    private router = inject(Router);
    
    createNew() {
        this.router.navigate(['/new-wod']);
    }

}
