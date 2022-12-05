import { LightningElement , api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class RecordFormExample extends LightningElement {
    
    fields = [NAME_FIELD];

    
    @api recordId;
    @api objectApiName;
}