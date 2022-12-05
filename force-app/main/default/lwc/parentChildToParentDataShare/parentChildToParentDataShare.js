import { LightningElement } from 'lwc';

export default class ParentChildToParentDataShare extends LightningElement {
    counter=0;

    handleAddition(){
        this.counter++;
    }

    handleSubtract(){
        this.counter--;
    }
}