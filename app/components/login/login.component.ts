/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component }                from '@angular/core';
import { ipcRenderer }              from 'electron';
import { Router }                   from '@angular/router';

import { GmailService }             from '../../services/gmail.service';
import { MailService }              from '../../services/mail.service';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css'],
})

export class LoginComponent {
    constructor(
        private router: Router,
        private gmailService: GmailService,
        private mailService : MailService) {

    }

    log(mail): void {
        ipcRenderer.send("log");
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            var token = arg;
            if(token.access_token && token.token_type) {
                this.gmailService.updateToken(token);
                this.mailService.setUserMail(mail);
                this.router.navigate(['/core']);
            } else {
                console.log(" error with the token, response : " , token);
            }
        })
    }
}
