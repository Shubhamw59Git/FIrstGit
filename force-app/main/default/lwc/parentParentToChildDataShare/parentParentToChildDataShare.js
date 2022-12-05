import { LightningElement } from 'lwc';

export default class ParentParentToChildDataShare extends LightningElement {

scounter=0;
handleNumber(event){
this.scounter=parseInt(event.target.value);
}

changeCounter(){
    this.template.querySelector('c-child-parent-to-child-data-share').addToCounter();
}

}