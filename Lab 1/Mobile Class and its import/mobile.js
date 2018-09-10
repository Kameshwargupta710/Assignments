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
