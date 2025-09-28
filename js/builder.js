// 设计模式-Builder（生成器）模式
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
// 产品类
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    Car.prototype.setWheels = function (wheels) {
        this.wheels = wheels;
    };
    Car.prototype.setBody = function (body) {
        this.body = body;
    };
    Car.prototype.toString = function () {
        return "[Car engine:".concat(this.engine, ", wheels:").concat(this.wheels, ", body:").concat(this.body, "]");
    };
    return Car;
}());
// 抽象建造者
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.getCar = function () {
        return this.car;
    };
    return CarBuilder;
}());
// 具体建造者A
var BmwBuilder = /** @class */ (function (_super) {
    __extends(BmwBuilder, _super);
    function BmwBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BmwBuilder.prototype.buildEngine = function () {
        this.car.setEngine("BMW-engine-turbo!");
    };
    BmwBuilder.prototype.buildBody = function () {
        this.car.setBody('BMW-car-body');
    };
    BmwBuilder.prototype.buildWheels = function () {
        this.car.setWheels('BMW-wheels!');
    };
    return BmwBuilder;
}(CarBuilder));
// 具体建造者B
var TeslaBuilder = /** @class */ (function (_super) {
    __extends(TeslaBuilder, _super);
    function TeslaBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeslaBuilder.prototype.buildEngine = function () {
        this.car.setEngine("Tesla-engine");
    };
    TeslaBuilder.prototype.buildBody = function () {
        this.car.setBody('Tesla-car-body!');
    };
    TeslaBuilder.prototype.buildWheels = function () {
        this.car.setWheels('Tesla-car-wheels!');
    };
    return TeslaBuilder;
}(CarBuilder));
// 指挥者
var CarDirector = /** @class */ (function () {
    function CarDirector(builder) {
        this.builder = builder;
    }
    CarDirector.prototype.construct = function () {
        this.builder.buildBody();
        this.builder.buildEngine();
        this.builder.buildWheels();
        return this.builder.getCar();
    };
    return CarDirector;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        var director = new CarDirector(new BmwBuilder());
        var bmw = director.construct();
        console.log("".concat(bmw));
        var director2 = new CarDirector(new TeslaBuilder());
        var tesla = director2.construct();
        console.log("".concat(tesla));
    };
    return Client;
}());
Client.main();
