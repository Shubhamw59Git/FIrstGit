import { LightningElement, track, wire } from 'lwc';
import getcontact from '@salesforce/apex/CalloutDemo.calloutRequest';
const COLS = [{label:'LastName', fieldName:'LastName', type:'text'},
              {label:'Title', fieldName:'Title', type:'text'},
              {label:'Phone', fieldName:'Phone', type:'text'}];

export default class CalloutDemo extends LightningElement {
    colm=COLS;
    @track contactList=[];
    @track error;
    @wire(getcontact) conList(result) 
    {
      
        if (result.data) 
        {
          let rec = JSON.parse(result.data);
          this.contactList = rec;
          this.error = undefined;
        } 
        else if(result.error) 
        {
          this.error = result.error;
          this.contactList=[];
        }
    }
}