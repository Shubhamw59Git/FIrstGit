import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DisplayToastMessage extends LightningElement {

    clickHandler(event){
        var btn=event.target.name;
        switch (btn)
        {
            case "successbt":
            let sev = new ShowToastEvent({
                title:'Toast Message',
                message:"Success Message",
                variant:'success',
                mode:'dismissable'
});
            this.dispatchEvent(sev);
            break;
            
            case "errorbt":
                let eev = new ShowToastEvent({
                title:"Toast Message",
                message:"Error Message",
                variant:'error',
                mode:"dismissable"

            });
            this.dispatchEvent(eev);
            break;
            

            case "infobt":
                let iev = new ShowToastEvent({
                title:"Toast Message",
                message:"Information Message",
                variant:'info',
                mode:"dismissable"

            });
            this.dispatchEvent(iev);
            break;
            

            case "warningbt":
                let wev = new ShowToastEvent({
                title:"Toast Message",
                message:"Warning Message",
                variant:'warning',
                mode:"dismissable"

            });
            this.dispatchEvent(wev);
            break;
            
        }
    }
}






