
/**
 * 类适配器模式，通过继承实现
 */
// 目标接口
interface Target {
    request():void
}

// （需要）适配者
class Adaptee {
    public specialRequest():void {
        console.log("Adaptee 特殊请求")
    }
}

// 类适配器
class Adapter extends Adaptee implements Target {
    public request():void{
        this.specialRequest()
    }
}

class Main{
    static main(){
        // 类适配器
        const target:Target = new Adapter()
        target.request()
    }
}

Main.main()