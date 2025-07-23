import { Routes } from '@angular/router';
import { WODFormComponent } from './wod-form/wod-form.component';
import { AppComponent } from './app.component';

const routeConfig: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home page',
    },
    {
        path: 'wod-form',
        component: WODFormComponent,
        title: 'Create a new WOD',
    },
];
export default routeConfig;
