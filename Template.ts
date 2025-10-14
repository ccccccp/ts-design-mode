/**
 * 模板方法模式
 * 模板方法模式（Template Method Pattern）是一种行为型设计模式，
 * 它定义了一个操作中算法的骨架（流程），
 * 并允许子类在不改变算法结构的情况下，重新定义其中的某些步骤。
 */
// 抽象类，定义模板方法
abstract class Beverage {
    public makeBeverage():void{
        this.boilWater()
        this.brew()
        this.pourInCup()
        this.addCondiments()
    }

    public boilWater():void{
        console.log("烧开水")
    }

    public pourInCup():void{
        console.log("倒入杯中")
    }

    // 抽象方法，由字类实现
    abstract brew():void
    abstract addCondiments():void

}

class Tea extends Beverage {
    brew(){
        console.log("泡茶叶")
    }
    addCondiments(){
        console.log("加柠檬")
    }
}

class Coffee extends Beverage {
    brew(): void {
        console.log("泡咖啡粉")
    }
    addCondiments(): void {
        console.log("加牛奶")
    }
}

class Main {
    static main(){
        const tea:Beverage = new Tea()
        tea.makeBeverage()

        const coffee:Beverage = new Coffee()
        coffee.makeBeverage()
    }
}
Main.main()