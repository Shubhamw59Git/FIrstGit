import { LightningElement } from 'lwc';

export default class OneWayBindingDemo extends LightningElement {
name="Shubham";
age=25;
skills=['Java','Salesforce','.Net'];
get firstSkill()
{
    return this.skills[0];
}
address={
    dno:'1-222',
    stname:'Dutta Road',
    city:'Hyd',
}

}