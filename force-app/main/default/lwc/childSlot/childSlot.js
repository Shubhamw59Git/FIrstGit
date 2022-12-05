import { LightningElement } from 'lwc';

export default class ChildSlot extends LightningElement {
    handleFooterChange(){
        const footerElem = this.template.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
}