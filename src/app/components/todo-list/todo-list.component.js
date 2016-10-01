"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dan_mac on 17/09/2016.
 */
var core_1 = require('@angular/core');
var TASKS = [];
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.tasks = TASKS;
        this.visible = true;
        this.toggled = 'toggled';
        this.visible = true;
    }
    TodoListComponent.prototype.toggle = function () {
        this.visible = !this.visible;
        this.toggled = this.visible ? 'toggled' : '';
    };
    TodoListComponent.prototype.addTask = function (TaskName) {
        var task = {
            name: TaskName,
            description: "Write your description here"
        };
        TASKS.push(task);
    };
    ;
    TodoListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    ;
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: './app/components/todo-list/todo-list.component.html',
            styleUrls: ['./app/components/todo-list/todo-list.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map