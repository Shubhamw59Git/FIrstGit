import { LightningElement, wire, track } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getAccounts from '@salesforce/apex/DeleteOperation.fetchAccountRecords';

const COLS = [{label:'Name', fieldName:'Name', type:'text'},
              {label:'AnnualRevenue', fieldName:'AnnualRevenue', type:'text'},
              {label:'BillingCity', fieldName:'BillingCity', type:'text'}];

export default class DeleteOperation extends LightningElement {
   colm  = COLS;
   @track selectedRecord;
   @track wiredAccountList=[];
   @track accountList=[];
   @track error;
   
   @wire(getAccounts) accList(result) 
   {
      if (result.data) 
      {
        this.accountList =result.data;
        this.error = undefined;
      } 
      else if (result.error) 
      {
        this.error = result.error;
        this.accountList =[];
      }
    }

    handelSelection(event) {
      if (event.detail.selectedRows.length > 0) {
        this.selectedRecord = event.detail.selectedRows[0].Id;
      }
    }

    deleteRecord() {
      deleteRecord(this.selectedRecord)
        .then(() => {
          refreshApex(this.wiredAccountList);
        })
        .catch(error => {
        })
    }
}
