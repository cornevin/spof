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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var login_component_1 = require('./components/login/login.component');
var todo_list_component_1 = require('./components/todo-list/todo-list.component');
var task_detail_component_1 = require('./components/todo-list/task-detail/task-detail.component');
var mail_list_component_1 = require('./components/mail-list/mail-list.component');
var core_component_1 = require('./components/core/core.component');
var mail_service_1 = require('./components/mail-list/mail.service');
var gmail_service_1 = require('./services/gmail.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                todo_list_component_1.TodoListComponent,
                task_detail_component_1.TaskDetailComponent,
                mail_list_component_1.MailListComponent,
                core_component_1.CoreComponent
            ],
            providers: [
                mail_service_1.MailService,
                gmail_service_1.GmailService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map