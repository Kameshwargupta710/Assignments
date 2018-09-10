/// <reference path="mobile.ts" />
namespace Mobile{
    export class BasicPhoneDetails extends MobileDetails{
        mobileType:string;
        printMobileDetails(){
            console.log(this.mobileId,this.mobileName,this.mobileCost,this.mobileType);
        }
    }
}