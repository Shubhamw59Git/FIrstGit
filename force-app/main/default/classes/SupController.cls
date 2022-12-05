public with sharing class SupController { 
    // apex method to fetch contact records from salesforce database 
    @AuraEnabled
    public static List<Supplier__c> fetchSupplier()
    {        
            list<Supplier__c> lstsup = new list<Supplier__c>();
            for(Supplier__c sup :[Select id , Name__c , Email_Id__c , Address__c , MNo__c from Supplier__c])
            {
                lstsup.add(sup);
            } 
            return lstsup;        
    }
}