import { LightningElement } from 'lwc';

export default class ChildErrorCallBack extends LightningElement {
    constructor(){ 
        super()
        console.log("Child constructor called")
        let exp = new Error('Loading of child component failed')
        throw exp;
    }
    connectedCallback(){ 
        console.log("Child connectedCallback called") 
            
    }
    renderedCallback(){ 
        console.log("Child renderedCallback called")
    }
    disconnectedCallback(){
        console.log("Child Disconected CallBack Failed")
    }
}