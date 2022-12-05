import { LightningElement, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetObjectsInfo extends LightningElement {
    @track accData={};
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data,error}){
        if(data){
            this.accData = data;
            console.log(JSON.stringify(data.recordTypeInfos));
            console.log(JSON.stringify(data.fields));
            console.log(JSON.stringify(data.apiName));
            console.log(JSON.stringify(data.defaultRecordtypeId));
        }
    }

}