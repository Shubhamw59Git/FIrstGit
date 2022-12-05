import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordLDS extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name]=value
    }
    createContact(){
        const recordInput={apiName:CONTACT_OBJECT.objectApiName,fields:this.formFields}
        createRecord(recordInput).then(result=>{
            let sev = new ShowToastEvent({
                title:'Success',
                message:`Contact created with is ${result.id}`,
                variant:'success'
              
     });
        this.dispatchEvent(sev);
        this.template.querySelector('form.createForm').reset()
        this.formFields={}
        })
        .catch(error=>{
            let e = new ShowToastEvent({
                title:'Error Occured',
                message:'Error contact',
                variant:'error'
               
     });
     this.dispatchEvent(e);
        })
    }
    
}