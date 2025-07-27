import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./nav-bar/nav-bar.component";

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'client';
}

