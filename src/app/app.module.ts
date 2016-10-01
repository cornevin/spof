import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms';
import { routing }                      from './app.routing';
import { HttpModule }                   from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }                 from './app.component';

import { LoginComponent }               from './components/login/login.component';
import { TodoListComponent }            from './components/todo-list/todo-list.component';
import { TaskDetailComponent }          from './components/todo-list/task-detail/task-detail.component';
import { MailListComponent }            from './components/mail-list/mail-list.component';
import { CoreComponent }                from './components/core/core.component';

import { MailService }                  from './components/mail-list/mail.service';
import { GmailService }                 from './services/gmail.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TodoListComponent,
        TaskDetailComponent,
        MailListComponent,
        CoreComponent
    ],
    providers: [
        MailService,
        GmailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
