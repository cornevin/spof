/**
 * Created by Quentin on 9/21/2016.
 */
import { Injectable }                                           from '@angular/core';

@Injectable()
export class MenuService {
    
    mailMenuState: boolean;

    constructor() {
        this.mailMenuState = false;
     }

    setMailMenuState() {
        this.mailMenuState = !this.mailMenuState;
    }
}
