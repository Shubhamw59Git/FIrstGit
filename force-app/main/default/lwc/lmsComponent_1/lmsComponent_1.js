import { LightningElement, wire } from 'lwc';
import SAMPLE from "@salesforce/messageChannel/MyMessageChannel__c"
import {MessageContext,publish} from 'lightning/messageService'
export default class LmsComponent_1 extends LightningElement {
    @wire(MessageContext) context
    ename;
    changeName(event){
        this.ename=event.target.value;
    }
    eage;
    changeAge(event){
        this.eage=event.target.value;
    }

    publishMessage(){
        let eData={empName:{value:this.ename},empAge:{value:this.eage}};
        publish(this.context,SAMPLE,eData)
    }
}