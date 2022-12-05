import { api, LightningElement } from 'lwc';

export default class LifeCycleParentMounting extends LightningElement {
    @api name 
    company 
    connectedCallback(){ 
        console.log("parent connectedCallback called")
        this.name = 'vivek connected callback'
        this.company = 'techwish connected callback'
        console.log(this.name);   
        console.log(this.company);     
    }
    constructor(){ 
        super() // to call parent class constructor
        console.log("parent constructor called")
        this.name = 'Ravi constructor'
        this.company = 'Antra constructor'
        console.log(this.name);
        console.log(this.company);
    }
    renderedCallback(){ 
        console.log("parent renderedCallback called")
    } 
    changeHandler(event){
        this.name = event.target.value
    }   
}