import { Routes } from '@angular/router';
import { WODFormComponent } from './wod-form/wod-form.component';
import { HomeComponent } from './app.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'wod-form',
        component: WODFormComponent,
        title: 'Create a new WOD',
    },
];
export default routeConfig;
