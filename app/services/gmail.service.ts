/**
 * Created by Quentin on 9/21/2016.
 */
import { Injectable }                                           from '@angular/core';
import { Http , Headers, RequestOptions, Response }             from '@angular/http';
import {Observable} from 'rxjs/Rx';


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

/*    getMailList(): any {
        let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
        let options = new RequestOptions({ headers: headers });

        this.http.get('https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages', options)
            .map((res:Response) => console.log(res.json()));
    } */


    getMailList (): Observable<any[]> {
        let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages', options)
                      .map(this.getMail(this.token, this.http))
                      .catch(this.handleError);
    }

    private getMail(token: any, http: any) {
        return function extractData(res: Response) {
            let body = res.json();
            console.log(token, "<----- ici ");
            console.log(res);
            let headers = new Headers({ 'Authorization' : token.token_type + ' ' + token.access_token });
            let options = new RequestOptions({ headers: headers });

            console.log(body.messages[0]);
            console.log("Body : ", body);
            var test: string;
            test = body.messages[0].id;
            var request: string;
            request = "https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages/" + test;
            console.log(request);
            http.get(request, options)
                          .toPromise()
                          .then(extractData)
                          .catch(handleError);

            return body.data || { };

            function extractData(res: Response) {
              let body = res.json();

              console.log("Yeah : ",body)
              return body.data || { };
            }

            function handleError (error: any) {
                // In a real world app, we might use a remote logging infrastructure
                // We'd also dig deeper into the error to get a better message
                let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                console.log("nop : ", errMsg); // log to console instead
                return Promise.reject(errMsg);
            }


        };
    }

/*    private extractData(res: Response) {
          let body = res.json();
          console.log(this.token, "<----- ici undefined");
    //      let headers = new Headers({ 'Authorization' : this.token.token_type + ' ' + this.token.access_token });
    //      let options = new RequestOptions({ headers: headers });

          console.log(body.messages[0]);
          console.log("Body : ", body);

/*          this.http.get('https://www.googleapis.com/gmail/v1/users/qcornevin@gmail.com/messages/id', options)
                        .toPromise()
                        .then(console.log(this.ex)) *//*

          return body.data || { };
    }*/

    private handleError (error: any) {
          // In a real world app, we might use a remote logging infrastructure
          // We'd also dig deeper into the error to get a better message
          let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg); // log to console instead
          return Observable.throw(errMsg);
    }
}
