/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component }                from '@angular/core';
import { ipcRenderer }              from 'electron';
import { Router }                   from '@angular/router';

import { GmailService }             from '../../services/gmail.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    constructor(
        private router: Router,
        private gmailService: GmailService) {

    }

    test(): void {
        ipcRenderer.send("test");
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            var token = arg;
            if(token.access_token && token.token_type) {
                this.gmailService.updateToken(token);
                this.router.navigate(['/core'])
            } else {
                console.log(" error with the token, response : " , token);
            }
        })
    }
}
