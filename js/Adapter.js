var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// （需要）适配者
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specialRequest = function () {
        console.log("Adaptee 特殊请求");
    };
    return Adaptee;
}());
// 适配器
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adapter.prototype.request = function () {
        this.specialRequest();
    };
    return Adapter;
}(Adaptee));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var target = new Adapter();
        target.request();
    };
    return Main;
}());
Main.main();
