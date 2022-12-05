import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    firstName;
    company;
    status=false;
    fname(event){
        this.firstname = event.target.value;
    }

    cname(event){
        this.company = event.target.value;
    }

    submitAction(){
        this.status=true;
    }

}