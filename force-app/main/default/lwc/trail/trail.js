import { LightningElement } from 'lwc';

export default class Trail extends LightningElement {

    num = 10; 
    test() { 
       var num = 100; 
       console.log("value of num in test() "+num);
    } 
}