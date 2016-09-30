/**
 * Created by Quentin on 9/21/2016.
 */
import { Injectable }                                           from '@angular/core';
import { Http , Headers, RequestOptions, Response }             from '@angular/http';
import {Observable}                                             from 'rxjs/Rx';

import { MailId }                                               from '../models/mailId';
import { Mail }                                                 from '../models/mail';

@Injectable()
export class GmailService {
    constructor(private http: Http) { }

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

        return this.http.get('https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages', options)
                      .map(this.extractIdList)
                      .catch(this.handleError);
    }


    private extractData(res: Response): Mail {
        let body = res.json();
        return body || { };
    }

    getMail(mailId: any): Observable<Mail> {
        let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
        let options = new RequestOptions({ headers: headers });


        var messageId: string;
        messageId = mailId;
        var request: string;
        request = "https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages/" + messageId;

        return this.http.get(request, options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    private extractIdList(res: Response) : MailId[] {
        let body = res.json();
        return body.messages || { };
    }

    private handleError (error: any) {
          let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(errMsg);
    }
}
