import { LightningElement } from 'lwc';

export default class ChildUnmountedComponent extends LightningElement {
    constructor(){
        super()
        console.log("child constructor called")
    
     }  
     connectedCallback()
     {
        console.log("child connected callback called")
     }
     renderedCallback()
     {
        console.log("child randered callback called")
     }
     disconnectedCallback()
     {
        console.log("child disconected callback called")
        alert("child disconnectedcallback called")
     }
}