/**
 * Created by Quentin on 9/15/2016.
 */


import { Component, Input } from '@angular/core';
import { Task }             from '../../../models/task';
import { ipcRenderer }      from 'electron';


@Component({
    selector: 'task-detail',
    templateUrl: './app/components/todo-list/task-detail/task-detail.component.html',
    styleUrls: ['./app/components/todo-list/task-detail/task-detail.component.css'],
})

export class TaskDetailComponent {
    @Input()
    todoTask: Task;

    sendMail(): void {
        ipcRenderer.send("share", this.todoTask);
    }
}