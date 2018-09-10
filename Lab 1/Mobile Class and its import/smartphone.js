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
