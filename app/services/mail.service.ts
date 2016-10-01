/**
 * Created by Quentin on 9/21/2016.
 */
import { Injectable }                                           from '@angular/core';

@Injectable()
export class MailService {
    constructor() { }

    userMail: string;

    getUserMail() : string {
        return this.userMail;
    }

    setUserMail(userMail : string) {
        this.userMail = userMail;
    }
}
