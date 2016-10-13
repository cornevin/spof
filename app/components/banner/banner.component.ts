/**
 * Created by dan_mac on 17/09/2016.
 */

import { Component }                from '@angular/core';
import { GmailService }             from '../../services/gmail.service';
import { User }                     from '../../models/user';

@Component({
    selector: 'banner',
    templateUrl: './app/components/banner/banner.component.html',
    styleUrls: ['./app/components/banner/banner.component.css'],
})

export class BannerComponent {
    user: User;

    ngOnInit() {
        this.getUserInformation();
    }

    constructor(
        private gmailService: GmailService) {
    }


    getUserInformation() {
        this.gmailService.getUserInformation()
                    .subscribe(
                        user => this.user = user,
                        error => console.log(error)
                    );
    }
}
