import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }   from './app.component';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
 //       Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        TaskDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
