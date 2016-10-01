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
 * Created by Quentin on 9/21/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var GmailService = (function () {
    function GmailService(http) {
        this.http = http;
    }
    GmailService.prototype.updateToken = function (token) {
        this.token = token;
    };
    GmailService.prototype.getToken = function () {
        return this.token;
    };
    GmailService.prototype.getMailList = function () {
        var headers = new http_1.Headers({ 'Authorization': this.token.token_type + ' ' + this.token.access_token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages', options)
            .map(this.extractIdList)
            .catch(this.handleError);
    };
    GmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    GmailService.prototype.getMail = function (mailId) {
        var headers = new http_1.Headers({ 'Authorization': this.token.token_type + ' ' + this.token.access_token });
        var options = new http_1.RequestOptions({ headers: headers });
        var messageId;
        messageId = mailId;
        var request;
        request = "https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages/" + messageId;
        return this.http.get(request, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GmailService.prototype.extractIdList = function (res) {
        var body = res.json();
        return body.messages || {};
    };
    GmailService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    GmailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GmailService);
    return GmailService;
}());
exports.GmailService = GmailService;
//# sourceMappingURL=gmail.service.js.map