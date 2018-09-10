/// <reference path ="mobile.ts" />
namespace Mobile{
    export class SmartPhoneDetails extends MobileDetails{
        mobileType:string;
         printMobileDetails(){
            console.log(this.mobileId,this.mobileName,this.mobileCost,this.mobileType);
        }
    }
}