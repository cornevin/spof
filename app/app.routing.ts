/**
 * Created by dan_mac on 17/09/2016.
 */
import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { TodoListComponent }        from './components/todo-list/todo-list.component';
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
        path: 'todoList',
        component: TodoListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
