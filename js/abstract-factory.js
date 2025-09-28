// 具体产品
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.click = function () {
        console.log("mac按钮点击");
    };
    return MacButton;
}());
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.click = function () {
        console.log('windows 按钮点击');
    };
    return WindowsButton;
}());
var MacTextField = /** @class */ (function () {
    function MacTextField() {
    }
    MacTextField.prototype.input = function () {
        console.log("mac 文本框输入");
    };
    return MacTextField;
}());
var WindowsTextField = /** @class */ (function () {
    function WindowsTextField() {
    }
    WindowsTextField.prototype.input = function () {
        console.log("windows 文本框输入");
    };
    return WindowsTextField;
}());
// 具体工厂
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createTextField = function () {
        return new MacTextField();
    };
    return MacFactory;
}());
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createTextField = function () {
        return new WindowsTextField();
    };
    return WindowsFactory;
}());
var AppMain = /** @class */ (function () {
    function AppMain() {
        var factory = new WindowsFactory(); // MacFactory,WindowsFactory
        var button = factory.createButton();
        var textField = factory.createTextField();
        button.click();
        textField.input();
    }
    return AppMain;
}());
new AppMain();
