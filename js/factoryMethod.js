/**
 * 抽象工厂方法模式
 */
// 具体产品类
var WindowsBtn = /** @class */ (function () {
    function WindowsBtn() {
    }
    WindowsBtn.prototype.click = function () {
        console.log("windows pc click");
    };
    return WindowsBtn;
}());
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.click = function () {
        console.log("mac pc click");
    };
    return MacButton;
}());
// 抽象工厂
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
// 具体工厂类
var WindowsButtonFactory = /** @class */ (function () {
    function WindowsButtonFactory() {
    }
    WindowsButtonFactory.prototype.createButton = function () {
        return new WindowsBtn();
    };
    return WindowsButtonFactory;
}());
var MacButtonFactory = /** @class */ (function () {
    function MacButtonFactory() {
    }
    MacButtonFactory.prototype.createButton = function () {
        return new MacButton();
    };
    return MacButtonFactory;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        var windowButtonFactory = new WindowsButtonFactory();
        var windowBtn = windowButtonFactory.createButton();
        windowBtn.click();
        var macButtonFactory = new MacButtonFactory();
        var macButton = macButtonFactory.createButton();
        macButton.click();
    };
    return Client;
}());
Client.main();
