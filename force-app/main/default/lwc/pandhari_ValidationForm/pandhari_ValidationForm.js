import { LightningElement } from 'lwc';

export default class Pandhari_ValidationForm extends LightningElement {
    validateFields() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
    }
}