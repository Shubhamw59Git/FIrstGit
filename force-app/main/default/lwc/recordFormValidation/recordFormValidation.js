import { LightningElement, api } from 'lwc';
// import em from '@salesforce/schema/Contact.Email';
// import fx from '@salesforce/schema/Contact.Fax';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordFormValidation extends LightningElement {
    // // Expose a field to make it available in the template
    // email_id = em;
    // fax_no = fx;
    // // Flexipage provides recordId and objectApiName
    // @api recordId;
    // @api objectApiName;
    objectName = ACCOUNT_OBJECT
    inputValue=''
    handleChange(event){ 
        this.inputValue = event.target.value
    }
    handleSubmit(event){ 
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value
        if(!value.includes('Australia')){ 
            inputCmp.setCustomValidity("The account name must include 'Australia'")
        } 
        else { 
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            fields.Phone = '8884447000'
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }
    successHandler(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Account created",
            message: "Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
    handleError(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Error creating Account",
            message: event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }
}