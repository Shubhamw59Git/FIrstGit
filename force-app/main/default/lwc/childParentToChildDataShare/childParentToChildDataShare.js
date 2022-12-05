import { api, LightningElement } from 'lwc';

export default class ChildParentToChildDataShare extends LightningElement {
    @api counter=0;

    @api addToCounter(){
        this.counter += 100;
    }
}