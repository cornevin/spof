/**
 * Created by dan_mac on 17/09/2016.
 */
import { Component } from '@angular/core';
import { Task } from '../../models/task';

const TASKS: Task[] = [
];

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent {

    tasks = TASKS;
    selectedTask: Task;
    visible: boolean = true;
    toggled: string;

    constructor() {
        this.toggled = 'toggled';
        this.visible = true;
    }

    toggle(): void {
        this.visible = !this.visible;
        this.toggled = this.visible ? 'toggled' : '';
    }

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
