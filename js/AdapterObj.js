/**
 * （对象）适配器模式
 * 通过组合（持有对象）来实现适配
 */
// 适配者
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specialRequest = function () {
        console.log("特殊 request");
    };
    return Adaptee;
}());
// 组合适配器
var Adapter = /** @class */ (function () {
    function Adapter(adaptee) {
        this.adaptee = adaptee;
    }
    Adapter.prototype.request = function () {
        this.adaptee.specialRequest();
    };
    return Adapter;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var adaptee = new Adaptee();
        var target = new Adapter(adaptee);
        target.request();
    };
    return Main;
}());
Main.main();
