/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { remote, ipcRenderer } from 'electron';

//declare var utils: any;

//import './utils/utils.js';


@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
})
export class LoginComponent {

    test(): void {
        console.log("PLS");
        ipcRenderer.send("test");
    }
}
