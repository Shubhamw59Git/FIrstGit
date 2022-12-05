import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [{label:'Id', fieldName:'Id'},
              {label:'Name', fieldName:'Name'},
            {label:'Phone', fieldName:'Phone', editable:true},
            {label:'Email', fieldName:'Email',type:'email',editable:true}];

export default class DeleteRecord extends LightningElement {
  contacts=[]
  columns=COLS
  draftValue=[]
  @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'AllContacts'})
  listViewHandler({data,error}){
    if(data)
    {
      this.contacts=data.records.records.map(item=>{ 
        return { "Id":this.getValue(item,'Id'),
        "Name":this.getValue(item,'Name')
      }
       
      })
    }

  }
  getValue(data,field)
  {
    return data.fields[field].value;
  }

    deleteHandler(event){
      const recordInput=event.detail.draftValue.map(draft=>{
        const fields={...draft}
        return {fields:fields};
      })
      const promise=recordInput.map(recordInput=>deleteRecord(recordInput))
      promise.all(promise).then(()=>{
      this.draftValue=[]
    }).catch(error=>{
      console.error("error deleting the record")
    })
      
  }
  
}