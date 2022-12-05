import { LightningElement, wire, track } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [{label:'Id', fieldName:'Id'},
              {label:'Name', fieldName:'Name'},
              {label:'Phone', fieldName:'Phone', editable:true},
              {label:'Email', fieldName:'Email',type:'email', editable:true}];

export default class DeleteRecordLDS extends LightningElement {
  recordId=[];
  contacts=[];
  columns=COLS;
  @track selectedRecord=[];
  @track wiredAccountList;
  draftValue=[];

  changeHandler(event){
    this.recordId=event.target.value;
}
  @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'AllContacts'})
  listViewHandler({data,error}){
    if(data)
    {
      this.contacts=data.records.records.map(item=>{ 
        return { "Id":this.getValue(item,'Id'),
        "Name":this.getValue(item,'Name'),
        "Phone":this.getValue(item,'Phone'),
        "Email":this.getValue(item,'Email')
      }})
    }

  }
  
  handelSelection(event) {
    if (event.detail.selectedRows.length > 0) {
      this.selectedRecord = event.detail.selectedRows[0].Id;
    }
  }

  getValue(data,field)
  {
    return data.fields[field].value;
  }

    deleteRecord() {
        deleteRecord(this.selectedRecord)
          .then(() => {
            refreshApex(this.wiredAccountList);
            let sev = new ShowToastEvent({
                title:'Toast Message',
                message:"Success Message",
                variant:'success',
                mode:'dismissable'});
            this.dispatchEvent(sev);
          })
          .catch(error => {
            let eev = new ShowToastEvent({
                title:"Toast Message",
                message:"Error Message",
                variant:'error',
                mode:"dismissable"
              });
            this.dispatchEvent(eev);
          })
      }      
  }
  
