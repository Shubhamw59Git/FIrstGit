public with sharing class Spoonacular 
{
    @AuraEnabled(cacheable=true)
    public static string getRecipe(string prot,string carb)
    {
        // string prot;
        // string carb;
        string msg='';
        Http h = new Http();
        HttpRequest hreq=new HttpRequest();
        hreq.setEndpoint('https://api.spoonacular.com/recipes/findByNutrients?apiKey=08fd008b1922481d8de577421e1ccb03&minCarbs='+carb+'&minProtein='+prot);
        hreq.setMethod('GET');
        HttpResponse hres=h.send(hreq);
        integer rescode=hres.getStatusCode();
        
        If(rescode==200)
        {
            msg = hres.getBody();
        }
        return msg;
    }
}
