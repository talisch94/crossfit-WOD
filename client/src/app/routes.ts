import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WODFormComponent } from './components/wod-form/wod-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'new-wod',
        component: WODFormComponent,
        title: 'WOD Form Page',
    },
    {
        path: 'wod/:id',
        component: WODFormComponent,
        title: 'WOD Form Page',
    },
    {
        path: 'admin',
        component: AdminPageComponent,
        title: 'WOD List Page',
    }
];
export default routeConfig;
