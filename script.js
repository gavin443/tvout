//above line so typescript can locate iformatcurrency code
var BrassMaxContsCalculator = /** @class */ (function () {
    function BrassMaxContsCalculator(widgetId) {
        this.widgetId = widgetId;
        this.init();
    }
    BrassMaxContsCalculator.prototype.init = function () {
        this.maxPensionablePayInput = document.getElementById("max-pensionable-pay-input-" + this.widgetId);
        this.setupListeners();
    };
    BrassMaxContsCalculator.prototype.setupListeners = function () {
        this.maxPensionablePayInput.addEventListener("input", function () { });
    };
    return BrassMaxContsCalculator;
}());
