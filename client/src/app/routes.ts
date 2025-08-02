import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WODFormComponent } from './components/wod-form/wod-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/registration/register-form.component';

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
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Log In Page',
    },
    {
        path: 'register',
        component: RegisterFormComponent,
        title: 'Registration Page',
    }

];
export default routeConfig;
