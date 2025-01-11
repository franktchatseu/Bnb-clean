import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { dashboard_routes } from './pages/dashboard/dashboard.route';

export const routes: Routes = [
    {path:"" ,component:LoginComponent},
    {path:"dashboard" ,component:DashboardComponent , children:dashboard_routes}
];
