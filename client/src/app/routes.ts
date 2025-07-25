import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WODFormComponent } from './components/wod-form/wod-form.component';
import { WODListComponent } from './components/wod-list/wod-list.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'wod-form',
        component: WODFormComponent,
        title: 'WOD Form Page',
    },
    {
        path: 'wods',
        component: WODListComponent,
        title: 'WOD List Page',
    }
];
export default routeConfig;
