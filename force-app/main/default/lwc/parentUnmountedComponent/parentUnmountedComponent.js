import { LightningElement } from 'lwc';

export default class ParentUnmountedComponent extends LightningElement 
{
    constructor(){
        super()
        console.log("parent constructor called")
    
     }  
     connectedCallback(){
        console.log("parent connected callback called")
     }
     renderedCallback(){
        console.log("parent randered callback called")
     }
     isChildVisible = true;
     handleClick(){
        this.isChildVisible = !isChildVisible;
     }
}