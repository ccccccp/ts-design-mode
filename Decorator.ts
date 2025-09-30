/**
 * 装饰器模式(Decorator pattern)
 * 装饰器模式（Decorator Pattern）是一种结构型设计模式，它允许在不修改原有类的情况下，动态地为对象添加新的功能。
 * 它通过创建一个装饰类（Decorator）来包裹原始对象，从而扩展功能。
 * ✅ 核心思想：使用组合（composition）代替继承，动态地增强对象的功能。
 */

// 构建接口
interface DataSource {
    readData():string;
    writeData(data:string):void
}

//具体构件类

class FileDataSource implements DataSource {
    private filename:string
    constructor(filename:string) {
        this.filename = filename
    }
    readData(): string {
        return "从文件"+ this.filename + "读取数据"
    }
    writeData(data: string): void {
        console.log(`写数据${data}到 ${this.filename} 文件`)
    }
}
// 抽象装饰器类
// 装饰器基类，持有一个DataSource引用
class DataSourceDecorator implements DataSource {
    private wrapee:DataSource

    constructor(source:DataSource) {
        this.wrapee = source
    }

    readData(): string {
        return this.wrapee.readData()
    }
    writeData(data: string): void {
        return this.wrapee.writeData(data)
    }
}

// 具体装饰器类,添加加密功能(可以无限添加其他功能)
class EncryptionDecorator extends DataSourceDecorator {
    constructor(source:DataSource){
        super(source)
    }
    readData(): string {
        const encodedData = super.readData()
        const decodedData = "【解密后:】" + encodedData
        return decodedData
    }
    writeData(data: string): void {
        const encodedData = "【加密】" + data
        return super.writeData(encodedData)
    }
}

class Main {
    static main(){
        const fds = new FileDataSource("aa.txt")
        const encryptedDs:DataSource = new EncryptionDecorator(fds)
        encryptedDs.writeData("{aa:1}")
        const data = encryptedDs.readData()
        console.log(data)
    }
}
Main.main()