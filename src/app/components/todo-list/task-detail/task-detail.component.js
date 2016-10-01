/**
 * Created by Quentin on 9/15/2016.
 */
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
var core_1 = require('@angular/core');
var task_1 = require('../../../models/task');
var TaskDetailComponent = (function () {
    function TaskDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskDetailComponent.prototype, "todoTask", void 0);
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: 'task-detail',
            templateUrl: './app/components/todo-list/task-detail/task-detail.component.html',
            styleUrls: ['./app/components/todo-list/task-detail/task-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map