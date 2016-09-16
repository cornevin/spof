import { Component } from '@angular/core';

import { Task } from './models/task';

const TASKS: Task[] = [

];

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent {

    tasks = TASKS;
    selectedTask: Task;

    /*    task: Task = {
            name: "Work chineese ! "
        };

    */
    addTask(TaskName: string): void {
        var task: Task = {
            name: TaskName,
            description: "Write your description here"
        };
        TASKS.push(task);
    };

    onSelect(task: Task): void {
        this.selectedTask = task;
    };
}
