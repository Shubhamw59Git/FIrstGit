public with sharing class ImperativeMethodDemo {
    @auraEnabled(cacheable=true)
    public static List<Account> fetchAccount(decimal minar, decimal maxar) {
        return [select Id, Name, AnnualRevenue, BillingCity, Rating from Account where AnnualRevenue>=:minar and AnnualRevenue<:maxar WITH SECURITY_ENFORCED];
    }
}
