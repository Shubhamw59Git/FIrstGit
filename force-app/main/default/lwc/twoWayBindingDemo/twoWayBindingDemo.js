import { LightningElement, track } from 'lwc';

export default class TwoWayBindingDemo extends LightningElement {

    /*name="Shubham";
    age=25;

    changeName(event){
            this.name=event.target.value;
    }
    changeAge(event){
            this.age=event.target.value;
    }*/
    @track
    address={
        Dno: '1-255',
        stName: 'Dutta Mandir Road',
        city: 'Hyd',
    }

    @track
    skill=['Java','Apex','.Net'];
    get firstSkill(){
        return this.skill[2];
    }

    changeDno(event){
        this.address.Dno = event.target.value;
    }
    changestName(event){
        this.address.stName = event.target.value;
    }
    changecity(event){
        this.address.city = event.target.value;
    }
    changeSkill(event){
        this.skill[2] = event.target.value;
    }
}