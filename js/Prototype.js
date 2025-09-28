var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
    };
    return Prototype;
}());
var ConcretePrototype1 = /** @class */ (function () {
    function ConcretePrototype1(data) {
        this.data = data;
    }
    ConcretePrototype1.prototype.clone = function () {
        return __assign(__assign({}, this), { getData: this.getData, setData: this.setData });
    };
    ConcretePrototype1.prototype.getData = function () {
        return this.data;
    };
    ConcretePrototype1.prototype.setData = function (data) {
        this.data = data;
    };
    return ConcretePrototype1;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var concretePrototype = new ConcretePrototype1({
            aa: 11
        });
        console.log(concretePrototype.data);
        var b = concretePrototype.clone();
        console.log("b:", b);
        b.setData({ aa: 22 });
        console.log(b.getData());
    };
    return Main;
}());
Main.main();
