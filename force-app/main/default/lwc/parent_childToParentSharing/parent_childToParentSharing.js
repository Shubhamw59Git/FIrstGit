import { LightningElement } from 'lwc';

export default class ParentLwcComponent extends LightningElement {
    message;
    ShowModal=false;
    cickhandler(event)
    {
       this.ShowModal=true; 
    }
    closehandler(event)
    {
     this.message = event.detail.message; 
     this.ShowModal=false;
    }
}