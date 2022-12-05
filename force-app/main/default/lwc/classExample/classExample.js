import { LightningElement,wire } from 'lwc';
import getacc from '@salesforce/apex/ClassExample.fetchAccount';
export default class ClassExample extends LightningElement {

    @wire(getacc,{armin:'$minar',armax:'$maxar'}) accdata;
    minar;
    changeMin(event){
        this.minar=event.target.value;
    }

    maxar;
    changeMax(event){
        this.maxar=event.target.value;
    }

}