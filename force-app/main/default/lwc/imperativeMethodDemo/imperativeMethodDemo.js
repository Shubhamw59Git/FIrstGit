import { LightningElement, track } from 'lwc';
import getacc from '@salesforce/apex/ImperativeMethodDemo.fetchAccount';
export default class ImperativeMethodDemo extends LightningElement {
    minArv;
    changeMinArv(event){
        this.minArv = event.target.value;
    }
    
    maxArv;
    changeMaxArv(event){
        this.maxArv = event.target.value;
    }

    @track result;
    dataStatus = false;
    errorStatus = false;
    clickHandler(event){
        getacc({minar:this.minArv,maxar:this.maxArv})
            .then(data => {
                this.result = data;
                this.dataStatus = true
            })
            .catch(error => {
                this.errorStatus = true;
            });
}
}