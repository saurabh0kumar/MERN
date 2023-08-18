class vehicle
{
    modelNo:number=2022
    constructor()
   {
    console.log("vehicle constructor")
   } 

}
class car extends vehicle
{
    brandName:string="honda";
    constructor()
    {
        super()
        console.log("car constructor")
    }
    displayDetails()
    {
        console.log(this.modelNo);
        console.log(this.brandName);


    }
}
class rto extends car{
    displayOwnerDetails()
    {
        console.log("owner details")
    }
        
    }
    

var audi=new car();
