import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }   from './app.component';

import { LoginComponent }               from            './components/login/login.component';
import { TodoListComponent }            from            './components/todo-list/todo-list.component';
import { TaskDetailComponent }          from            './components/todo-list/task-detail/task-detail.component';
import { MailListComponent }            from            './components/mail-list/mail-list.component';

import { MailService }                  from            './components/mail-list/mail.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TodoListComponent,
        TaskDetailComponent,
        MailListComponent
    ],
    providers: [
        MailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
