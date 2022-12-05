public class Class1 
{
  public string emGender{get;set;}
  public integer emMinExperience{get;set;}
  public integer emMaxExperience{get;set;}
  public decimal emMinSalary{get;set;}
  public decimal emMaxSalary{get;set;}
  public integer emMinAge{get;set;}
  public integer emMaxAge{get;set;}
  public list<EmployeeDetails__c> lstem;
  public list<EmployeeDetails__c> List1{get;set;}
  
  
  public Class1()
  {
    lstem=[select name,Experience__c,Gender__c,Salary__c,Age__c from EmployeeDetails__c];
    list1=lstem;
  }
  
  public void displayEmployee()
  {
     If(emGender!='')
     {
        List1=new list<EmployeeDetails__c>();
        for(EmployeeDetails__c em:lstem)
        {
           if(em.Gender__c == emGender)
           {
              List1.add(em);
           }
        }
        emGender='';
     }
     else if(emMinExperience!=0 && emMaxExperience!=0)
     {
        List1=new list<EmployeeDetails__c>();
        for(EmployeeDetails__c em:lstem)
        {
           if(em.Experience__c>emMinExperience && em.Experience__c<=emMaxExperience )
           {
              List1.add(em);
           }
        }
        emMinExperience=0;
        emMaxExperience=0;
     }
     else if(emMinSalary!=0.0 && emMaxSalary!=0.0)
     {
        List1=new list<EmployeeDetails__c>();
        for(EmployeeDetails__c em:lstem)
        {
           if(em.Salary__c>emMinSalary && em.Salary__c<=emMaxSalary)
           {
              List1.add(em);
           }
        }
        emMinSalary=0.0;
        emMaxSalary=0.0;
     }
     else if(emMinAge!=0 && emMaxAge!=0)
     {
        List1=new list<EmployeeDetails__c>();
        for(EmployeeDetails__c em:lstem)
        {
           if(em.age__c>emMinAge && em.Age__c<=emMaxAge )
           {
              List1.add(em);
           }
        }
        emMinAge=0;
        emMaxAge=0;
        
     }
  }
}