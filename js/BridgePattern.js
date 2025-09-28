/**
 * 桥接模式
 * 将抽象部分与实现部分分离，使它们可以独立变化
 **/
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
// 实现类
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.applyColor = function () {
        console.log("填充红色");
    };
    return Red;
}());
var Yello = /** @class */ (function () {
    function Yello() {
    }
    Yello.prototype.applyColor = function () {
        console.log("填充黄色");
    };
    return Yello;
}());
// 抽象类
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color; // 持有实现类引用
    }
    return Shape;
}());
// 扩展抽象类
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.draw = function () {
        console.log("画圆形");
        this.color.applyColor(); // 实现
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.draw = function () {
        console.log("画矩形");
        this.color.applyColor();
    };
    return Square;
}(Shape));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var yellow = new Yello();
        var red = new Red();
        var circle = new Circle(yellow);
        var square = new Square(red);
        circle.draw();
        square.draw();
    };
    return Main;
}());
Main.main();
