var TransferOutWidget = /** @class */ (function () {
    function TransferOutWidget(widgetId) {
        this.widgetId = widgetId;
        this.pageCount = 0;
        this.init();
    }
    TransferOutWidget.prototype.init = function () {
        this.maxPensionablePayInput = document.getElementById("max-pensionable-pay-input-" + this.widgetId);
        this.nextSection = document.querySelectorAll(".next-section");
        this.setupListeners();
    };
    TransferOutWidget.prototype.setupListeners = function () {
        var _this = this;
        //this.maxPensionablePayInput.addEventListener("input", () => {});
        this.nextSection.forEach(function (node) {
            node.addEventListener("click", function () {
                (document.querySelector("[data-tranferpage='" + _this.pageCount + "']")).classList.add("d-none");
                (document.querySelector("[data-tranferpage='" + (_this.pageCount + 1) + "']")).classList.remove("d-none");
                _this.pageCount + 1;
            });
        });
    };
    return TransferOutWidget;
}());
