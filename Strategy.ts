/**
 * 策略模式
 * 策略模式（Strategy Pattern） 是一种 行为型设计模式，它定义了一系列算法，把每个算法都封装起来，并且使它们可以互相替换。
 * 使用策略模式可以让算法的变化独立于使用算法的客户（即调用算法的对象）
 */

// 抽象策略接口
interface Strategy {
    execute():void
}

class ConcreteStrategyA implements Strategy {
    execute(): void {
        console.log("使用算法策略A")
    }
}
class ConcreteStrategyB implements Strategy {
    execute(): void {
        console.log("使用算法策略B")
    }
}
class Context {
    private strategy:Strategy
    setStrategy(strategy:Strategy){
        this.strategy = strategy
    }
    executeStrategy(){
        if(this.strategy) {
            this.strategy.execute()
        } else {
            throw '未设置策略'
        }
    }
}

class Main {
    static main(){
        const st1 = new ConcreteStrategyA()
        const st2 = new ConcreteStrategyB()
        const cxt = new Context()

        cxt.setStrategy(st1)
        cxt.executeStrategy()

        cxt.setStrategy(st2)
        cxt.executeStrategy()

    }
}
Main.main()