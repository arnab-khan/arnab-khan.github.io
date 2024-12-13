import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'work',
        loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent)
    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    },
];