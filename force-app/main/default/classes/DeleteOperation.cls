public class DeleteOperation {
    @AuraEnabled(cacheable=true)
    public static account[] fetchAccountRecords(){
        return [SELECT Id, Name, AnnualRevenue, BillingCity FROM Account LIMIT 10 ];
    }
}

