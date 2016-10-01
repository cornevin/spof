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
 * Created by Quentin on 9/19/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var mail_service_1 = require('./mail.service');
var gmail_service_1 = require('../../services/gmail.service');
var MailListComponent = (function () {
    function MailListComponent(router, mailService, gmailService) {
        this.router = router;
        this.mailService = mailService;
        this.gmailService = gmailService;
        this.mails = [];
    }
    MailListComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    MailListComponent.prototype.getMails = function () {
        var _this = this;
        this.gmailService.getMailList()
            .subscribe(function (mails) { return _this.getMailsById(mails); }, function (error) { return _this.errorMessage = error; });
    };
    MailListComponent.prototype.getMailsById = function (idList) {
        var _this = this;
        for (var i = 0; i < 10; i++) {
            this.gmailService.getMail(idList[i].id)
                .subscribe(function (mail) { return _this.mails.push(mail); }, function (error) { return _this.errorMessage = error; });
        }
    };
    MailListComponent = __decorate([
        core_1.Component({
            selector: 'mail-list',
            templateUrl: './app/components/mail-list/mail-list.component.html',
            styleUrls: ['./app/components/mail-list/mail-list.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, mail_service_1.MailService, gmail_service_1.GmailService])
    ], MailListComponent);
    return MailListComponent;
}());
exports.MailListComponent = MailListComponent;
//# sourceMappingURL=mail-list.component.js.map