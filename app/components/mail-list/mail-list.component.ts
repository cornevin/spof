/**
 * Created by Quentin on 9/19/2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


import { Mail } from '../../models/mail';
import { MailService } from './mail.service';

@Component({
    selector: 'mail-list',
    templateUrl: './app/components/mail-list/mail-list.component.html',
    styleUrls: ['./app/components/mail-list/mail-list.component.css'],
})

export class MailListComponent implements OnInit {
    mails: Mail[];

    ngOnInit(): void {
        this.getMails();
    }

    constructor(
        private router: Router,
        private mailService: MailService) {
    }

    getMails(): void {
        this.mailService.getMails().then(mails => this.mails = mails);
    }
}
