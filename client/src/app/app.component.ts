import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterOutlet, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class HomeComponent {
    title = 'client';
}
