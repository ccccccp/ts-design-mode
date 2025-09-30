/**
 * 组合模式（composite pattern）
 * 组合模式是一种结构型设计模式（Structural Pattern）。
 * 它将对象组织成树形结构以表示“整体-部分”的层次结构，使得用户对单个对象和组合对象的使用具有一致性。
 *   通俗点说：
 *   叶子节点（单个对象）和容器节点（组合对象）在使用时没有区别。
 *   客户端不需要区分“是叶子还是组合”，直接调用同一个接口就行。
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
// 抽象组件
var FileSystemComponent = /** @class */ (function () {
    function FileSystemComponent(filename) {
        this.filename = filename;
    }
    FileSystemComponent.prototype.add = function (component) {
        throw 'file system can not add';
    };
    FileSystemComponent.prototype.remove = function (component) {
        throw 'file system can not remove';
    };
    return FileSystemComponent;
}());
// 叶子节点：文件
var MyFile = /** @class */ (function (_super) {
    __extends(MyFile, _super);
    function MyFile(filename) {
        return _super.call(this, filename) || this;
    }
    MyFile.prototype.show = function () {
        console.log("文件：", this.filename);
    };
    return MyFile;
}(FileSystemComponent));
// 文件夹
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(filename) {
        var _this = _super.call(this, filename) || this;
        _this.children = [];
        return _this;
    }
    Folder.prototype.show = function () {
        console.log("文件夹:", this.filename);
        this.children.forEach(function (child) {
            child.show();
        });
    };
    Folder.prototype.add = function (file) {
        this.children.push(file);
    };
    Folder.prototype.remove = function (file) {
        this.children = this.children.filter(function (f) { return f !== file; });
    };
    return Folder;
}(FileSystemComponent));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var doc = new MyFile("doc文件");
        var png = new MyFile("png测试图");
        var docDir = new Folder("文档目录");
        var imageDir = new Folder("图片目录");
        var rootDir = new Folder("根目录");
        docDir.add(doc);
        imageDir.add(png);
        rootDir.add(docDir);
        rootDir.add(imageDir);
        rootDir.show();
        doc.add(png);
    };
    return Main;
}());
Main.main();
