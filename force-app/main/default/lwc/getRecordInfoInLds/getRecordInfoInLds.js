import { LightningElement, wire , api } from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordInfoInLds extends LightningElement {
  name;
  owner;
  AnnualRevenue;
  CreatedBy;
  @api recordId
  @wire(getRecord, { recordId: '$recordId',layoutTypes:['Full'],modes:['View'] })
  accountHandler({data}){
    if(data){
    console.log(data)
    this.name= data.fields.Name.Value ? data.fields.Name.value :data.fields.Name.value
    this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue :data.fields.AnnualRevenue.displayValue
    this.owner= data.fields.Owner.value ? data.fields.Owner.displayValue:data.fields.Owner.displayValue 
    this.CreatedBy= data.fields.CreatedBy.displayValue ? data.fields.CreatedBy.displayValue : data.fields.CreatedBy.displayValue
  }
}
}