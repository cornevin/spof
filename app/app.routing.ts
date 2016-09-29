/**
 * Created by dan_mac on 17/09/2016.
 */
import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CoreComponent }            from './components/core/core.component';
import { LoginComponent }           from './components/login/login.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'core',
        component: CoreComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
