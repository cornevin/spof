/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { remote, ipcRenderer } from 'electron';
import { Router } from '@angular/router';

//declare var utils: any;

//import './utils/utils.js';


@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
})
export class LoginComponent {
    constructor(private router: Router) { }

    test(): void {
        ipcRenderer.send("test");
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            var token = arg;
            console.log(arg);

            if(token.access_token && token.token_type) {
                this.router.navigate(['/todoList'])
            } else {
                console.log(" error with the token, response : " , token);
            }
        })
    }
}
