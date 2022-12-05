import { LightningElement, wire } from 'lwc';
import SAMPLE from "@salesforce/messageChannel/MyMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService'; 
export default class LmsComponent_2 extends LightningElement {
    @wire(MessageContext) context
    subscription 
    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLE, (empdata)=>{this.handleMessage(empdata)}, {scope:APPLICATION_SCOPE})
    }
      en;
      ag;
      handleMessage(empData){
        this.en = empData.empName.value? empData.empName.value :"No employee name found"
        this.ag = empData.empAge.value? empData.empAge.value :"No employee age found"
      }
      unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription=null
      }
}