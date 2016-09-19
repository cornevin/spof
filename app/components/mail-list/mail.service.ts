/**
 * Created by Quentin on 9/19/2016.
 */
import { Injectable } from '@angular/core';

import { Mail } from '../../models/mail';
import { MAILS } from './mock-mail';

@Injectable()
export class MailService {
    getMails(): Promise<Mail[]> {
        return Promise.resolve(MAILS);
    }
}