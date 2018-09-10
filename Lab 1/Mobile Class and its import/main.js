var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile;
(function (Mobile) {
    var MobileDetails = /** @class */ (function () {
        function MobileDetails() {
        }
        MobileDetails.prototype.printMobileDetails = function () {
            console.log(this.mobileId, this.mobileName, this.mobileCost);
        };
        return MobileDetails;
    }());
    Mobile.MobileDetails = MobileDetails;
})(Mobile || (Mobile = {}));
/// <reference path="mobile.ts" />
var Mobile;
(function (Mobile) {
    var BasicPhoneDetails = /** @class */ (function (_super) {
        __extends(BasicPhoneDetails, _super);
        function BasicPhoneDetails() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicPhoneDetails.prototype.printMobileDetails = function () {
            console.log(this.mobileId, this.mobileName, this.mobileCost, this.mobileType);
        };
        return BasicPhoneDetails;
    }(Mobile.MobileDetails));
    Mobile.BasicPhoneDetails = BasicPhoneDetails;
})(Mobile || (Mobile = {}));
/// <reference path ="mobile.ts" />
var Mobile;
(function (Mobile) {
    var SmartPhoneDetails = /** @class */ (function (_super) {
        __extends(SmartPhoneDetails, _super);
        function SmartPhoneDetails() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SmartPhoneDetails.prototype.printMobileDetails = function () {
            console.log(this.mobileId, this.mobileName, this.mobileCost, this.mobileType);
        };
        return SmartPhoneDetails;
    }(Mobile.MobileDetails));
    Mobile.SmartPhoneDetails = SmartPhoneDetails;
})(Mobile || (Mobile = {}));
/// <reference path = "mobile.ts" />
/// <reference path = "basicphone.ts" />
/// <reference path = "smartphone.ts" />
var data = [
    {
        "mobileId": 1000,
        "mobileName": "Samsung S9+",
        "mobileCost": 72000,
        "mobileType": "Android"
    },
    {
        "mobileId": 2000,
        "mobileName": "IPhoneX",
        "mobileCost": 84000,
        "mobileType": "IOS"
    }
];
function PrintDetails(phone) {
    phone.printMobileDetails();
}
var bObj = new Mobile.BasicPhoneDetails();
bObj.mobileId = data[1].mobileId;
bObj.mobileName = data[1].mobileName;
bObj.mobileCost = data[1].mobileCost;
bObj.mobileType = data[1].mobileType;
PrintDetails(bObj);
var sObj = new Mobile.SmartPhoneDetails();
sObj.mobileId = data[0].mobileId;
sObj.mobileName = data[0].mobileName;
sObj.mobileCost = data[0].mobileCost;
sObj.mobileType = data[0].mobileType;
PrintDetails(sObj);
