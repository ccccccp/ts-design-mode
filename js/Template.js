/**
 * 模板方法模式
 * 模板方法模式（Template Method Pattern）是一种行为型设计模式，
 * 它定义了一个操作中算法的骨架（流程），
 * 并允许子类在不改变算法结构的情况下，重新定义其中的某些步骤。
 */
// 抽象类，定义模板方法
class Beverage {
    makeBeverage() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    boilWater() {
        console.log("烧开水");
    }
    pourInCup() {
        console.log("倒入杯中");
    }
}
class Tea extends Beverage {
    brew() {
        console.log("泡茶叶");
    }
    addCondiments() {
        console.log("加柠檬");
    }
}
class Coffee extends Beverage {
    brew() {
        console.log("泡咖啡粉");
    }
    addCondiments() {
        console.log("加牛奶");
    }
}
class Main {
    static main() {
        const tea = new Tea();
        tea.makeBeverage();
        const coffee = new Coffee();
        coffee.makeBeverage();
    }
}
Main.main();
