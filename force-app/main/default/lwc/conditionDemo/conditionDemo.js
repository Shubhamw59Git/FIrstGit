import { LightningElement } from 'lwc';

export default class ConditionDemo extends LightningElement {
     age;
     status;
     defaultStatus;
     submitAge(event){
       this.age = event.target.value;
     }
     submitStatus(){
        this.defaultStatus=true;
        if(this.age>=18){
            this.status=true;
        }
        else{
            this.status=false;
        }
     }

}