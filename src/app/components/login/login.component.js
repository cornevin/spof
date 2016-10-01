/**
 * Created by dan_mac on 17/09/2016.
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
var electron_1 = require('electron');
var router_1 = require('@angular/router');
var gmail_service_1 = require('../../services/gmail.service.ts');
var LoginComponent = (function () {
    function LoginComponent(router, gmailService) {
        this.router = router;
        this.gmailService = gmailService;
    }
    LoginComponent.prototype.test = function () {
        var _this = this;
        electron_1.ipcRenderer.send("test");
        electron_1.ipcRenderer.on('asynchronous-reply', function (event, arg) {
            var token = arg;
            if (token.access_token && token.token_type) {
                _this.gmailService.updateToken(token);
                _this.router.navigate(['/core']);
            }
            else {
                console.log(" error with the token, response : ", token);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/login/login.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, gmail_service_1.GmailService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map