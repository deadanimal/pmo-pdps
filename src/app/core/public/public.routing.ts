import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const PublicRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]