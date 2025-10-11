/**
 * 备忘录模式（Memento Pattern） 是一种行为型设计模式，
 * 用于 在不破坏封装的前提下，保存一个对象在某个时刻的状态，
 * 并在之后将对象恢复到这个状态。
 * 简单来说，就是让对象“记住过去”，以便“后悔时能回到原样”。
 */

// 备忘录类
class Memento {
    private state:string

    constructor(state:string){
        this.state = state
    }
    public getState():string{
        return this.state
    }
}
// 发起人类
class Originator {
    private state:string
     public setState(state:string):void {
        this.state = state
        console.log("当前状态为：%s",this.state)
     }
     public getState():string {
        return this.state
     }
     public saveStateToMemento():Memento {
        return new Memento(this.state)
     }
     public restoreStateFromMemento(memento:Memento):void {
        this.state = memento.getState()
        console.log("恢复状态为：%s",this.state)
     }
}

// 管理类
class Caretaker {
    private memento:Memento
    public setMenento(memento:Memento):void{
        this.memento = memento
    }
    public getMemento():Memento{
        return this.memento
    }
}
// 测试
class Main {
    static main(){
        const originator:Originator = new Originator()
        const caretaker:Caretaker = new Caretaker()
        originator.setState("state#1")
        originator.setState("state#2")
        caretaker.setMenento(originator.saveStateToMemento())
        originator.setState("state#3")

        originator.restoreStateFromMemento(caretaker.getMemento())


    }
}
Main.main()