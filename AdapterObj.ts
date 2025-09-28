/**
 * （对象）适配器模式
 * 通过组合（持有对象）来实现适配
 */

// 目标接口
interface Target {
    request():void
}

// 适配者
class Adaptee {
    specialRequest():void{
        console.log("特殊 request")
    }
}

// 组合适配器
class Adapter implements Target {
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        this.adaptee.specialRequest();
    }
}

class Main{
    public static main(){
        const adaptee:Adaptee = new Adaptee()
        const target:Target = new Adapter(adaptee)
        target.request()
    }
}
Main.main()