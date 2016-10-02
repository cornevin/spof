/**
 * Created by Quentin on 9/21/2016.
 */
import { Injectable }                                           from '@angular/core';
import { Http , Headers, RequestOptions, Response }             from '@angular/http';
import {Observable}                                             from 'rxjs/Rx';

import { MailId }                                               from '../models/mailId';
import { Mail }                                                 from '../models/mail';

import { MailService }                                          from '../services/mail.service';

@Injectable()
export class GmailService {
    constructor(private http: Http,
                private mailService: MailService) { }

    token: any;

    updateToken(token: any): void {
        this.token = token;
    }

    getToken(): any {
        return this.token;
    }

    getMailList (): Observable<MailId[]> {
        let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
        let options = new RequestOptions({ headers: headers });

        var mail: string = this.mailService.getUserMail();

        var request = 'https://www.googleapis.com/gmail/v1/users/' + mail + '/messages';

        return this.http.get(request, options)
                      .map(this.extractIdList)
                      .catch(this.handleError);
    }

    private extractIdList(res: Response) : MailId[] {
        let body = res.json();
        return body.messages || { };
    }

    getMail(mailId: any): Observable<Mail> {
        let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
        let options = new RequestOptions({ headers: headers });

        var mail: string = this.mailService.getUserMail();

        var messageId: string = mailId;
        var request: string = "https://www.googleapis.com/gmail/v1/users/" +  mail + "/messages/" + messageId;

        return this.http.get(request, options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    private extractData(res: Response): Mail {
        let body = res.json();
        var mail: Mail;
        var subject: string;
        var from: string;
        var snippet: string = body.snippet;

        for(var i in body.payload.headers) {
            if(body.payload.headers[i].name === 'Subject') {
                subject = body.payload.headers[i].value;
            }
            if(body.payload.headers[i].name === 'From') {
                from = body.payload.headers[i].value;
            }
        }
        mail = {
            subject,
            from,
            snippet
        }

        return mail;
    }



    private handleError (error: any) {
          let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(errMsg);
    }
}
