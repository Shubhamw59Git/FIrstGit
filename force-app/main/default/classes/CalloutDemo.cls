public with sharing class CalloutDemo {
    
    @AuraEnabled(cacheable=true)
    public static string calloutRequest() 
    {
        string msg = '';
        Http h = new Http();
       
        
        HttpRequest hreq=new HttpRequest();
        hreq.setEndpoint('https://shubham915-dev-ed.my.salesforce.com/services/apexrest/ContactData');
        hreq.setHeader('Authorization','Bearer !AQQAQFX.am5Za7AAExN4zeeCPh3e3dM0JV9nqNWKM_qMYaomGpdwW3dsdDFI_eI4WE4anuDiceZxwBaRmzF7CwKLQDX4Saui');
        hreq.setMethod('GET');        
        HttpResponse hres=h.send(hreq);        
        if(hres.getStatusCode()==200)       
        {
            msg = hres.getBody();
            // object obj=JSON.deserialize(msg, List<ContactWrapperClass>.class);
            // lstwrp = (List<ContactWrapperClass>)obj;
            //sendmsg = msg;
        }
        return msg;
    }

    
}