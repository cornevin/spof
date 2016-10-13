/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component }                from '@angular/core';

@Component({
    selector: 'side-bar',
    templateUrl: './app/components/side-bar/side-bar.component.html',
    styleUrls: ['./app/components/side-bar/side-bar.component.css'],
})

export class SideBarComponent {
    showMail: boolean;

    constructor() {
        this.showMail = false;
    }

    mailMenu() {
        console.log("Mail menu function")
        
    }
}
