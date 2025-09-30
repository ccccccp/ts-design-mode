/**
 * 组合模式（composite pattern）
 * 组合模式是一种结构型设计模式（Structural Pattern）。
 * 它将对象组织成树形结构以表示“整体-部分”的层次结构，使得用户对单个对象和组合对象的使用具有一致性。
 *   通俗点说：
 *   叶子节点（单个对象）和容器节点（组合对象）在使用时没有区别。
 *   客户端不需要区分“是叶子还是组合”，直接调用同一个接口就行。
 */

// 抽象组件
 abstract class FileSystemComponent {
    protected filename:string;
    constructor(filename:string) {
        this.filename = filename
    }
    abstract show():void

    public add(component: FileSystemComponent):void{// 默认实现
        throw 'file system can not add'
    }
    public remove(component: FileSystemComponent){
        throw 'file system can not remove'
    }
 }
 // 叶子节点：文件

 class MyFile extends FileSystemComponent {
    constructor(filename:string) {
        super(filename)
    }
    public show(){
        console.log("文件：", this.filename )
    }
 }

 // 文件夹
 class Folder extends FileSystemComponent {

    protected children:Array<FileSystemComponent> = []

    constructor(filename:string) {
        super(filename)
    }
    public show(){
        console.log("文件夹:", this.filename)
        this.children.forEach((child:FileSystemComponent) => {
            child.show()
        })
    }
    public add(file:FileSystemComponent){
        this.children.push(file)
    }
    public remove(file:FileSystemComponent){
        this.children = this.children.filter(f => f!== file)
    }

 }

 class Main {
    static main(){
        const doc:MyFile = new MyFile("doc文件")
        const png:MyFile = new MyFile("png测试图")

        const docDir = new Folder("文档目录")
        const imageDir = new Folder("图片目录")

        const rootDir = new Folder("根目录")

        docDir.add(doc)
        imageDir.add(png)
        rootDir.add(docDir)
        rootDir.add(imageDir)

        rootDir.show()
        // doc.add(png)// error
    }
 }

 Main.main()