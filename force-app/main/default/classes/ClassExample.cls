public with sharing class ClassExample {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccount(decimal armin,decimal armax){

        return [Select id,name,annualrevenue from account WHERE AnnualRevenue>=:armin and AnnualRevenue<=:armax WITH SECURITY_ENFORCED];
    }
}