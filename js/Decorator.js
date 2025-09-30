/**
 * 装饰器模式(Decorator pattern)
 * 装饰器模式（Decorator Pattern）是一种结构型设计模式，它允许在不修改原有类的情况下，动态地为对象添加新的功能。
 * 它通过创建一个装饰类（Decorator）来包裹原始对象，从而扩展功能。
 * ✅ 核心思想：使用组合（composition）代替继承，动态地增强对象的功能。
 */
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
//具体构件类
var FileDataSource = /** @class */ (function () {
    function FileDataSource(filename) {
        this.filename = filename;
    }
    FileDataSource.prototype.readData = function () {
        return "从文件" + this.filename + "读取数据";
    };
    FileDataSource.prototype.writeData = function (data) {
        console.log("\u5199\u6570\u636E".concat(data, "\u5230 ").concat(this.filename, " \u6587\u4EF6"));
    };
    return FileDataSource;
}());
// 抽象装饰器类
// 装饰器基类，持有一个DataSource引用
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(source) {
        this.wrapee = source;
    }
    DataSourceDecorator.prototype.readData = function () {
        return this.wrapee.readData();
    };
    DataSourceDecorator.prototype.writeData = function (data) {
        return this.wrapee.writeData(data);
    };
    return DataSourceDecorator;
}());
// 具体装饰器类,添加加密功能
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator(source) {
        return _super.call(this, source) || this;
    }
    EncryptionDecorator.prototype.readData = function () {
        var encodedData = _super.prototype.readData.call(this);
        var decodedData = "【解密后:】" + encodedData;
        return decodedData;
    };
    EncryptionDecorator.prototype.writeData = function (data) {
        var encodedData = "【加密】" + data;
        return _super.prototype.writeData.call(this, encodedData);
    };
    return EncryptionDecorator;
}(DataSourceDecorator));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var fds = new FileDataSource("aa.txt");
        var encryptedDs = new EncryptionDecorator(fds);
        encryptedDs.writeData("{aa:1}");
        var data = encryptedDs.readData();
        console.log(data);
    };
    return Main;
}());
Main.main();
