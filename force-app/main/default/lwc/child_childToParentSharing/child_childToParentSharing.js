import id from '@salesforce/user/Id';
import { api, LightningElement } from 'lwc';

export default class ChildLwcComponent extends LightningElement {
  closemethod(event)
    {
    const myEvent = new CustomEvent('close',{detail:{message:"Model Closed Successfully"}})
    this.dispatchEvent(myEvent)
    }
    
} 