import { LightningElement } from 'lwc';

export default class LWC4 extends LightningElement {
        names=['Shubham','Shubhank','Shristi','Ankita'];

        getDetails(){

        const elem=this.template.querySelector('h1')
        elem.style.border="5px solid red";
        console.log(elem.innerText);
        const userElements = this.template.querySelectorAll('.name')
        userElements.forEach(item=>{
                console.log(item.innerText)
                item.setAttribute("title",item.innerText)
        })

        const childElem = this.template.querySelector('.child')
        childElem.innerHTML= '<p>Hey i am Child</p>'
        

       }

}