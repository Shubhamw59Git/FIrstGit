import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

 @api firstname;
 @api company;
 @api message;
 
}