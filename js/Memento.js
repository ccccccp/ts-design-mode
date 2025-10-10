/**
 * 备忘录模式（Memento Pattern） 是一种行为型设计模式，
 * 用于 在不破坏封装的前提下，保存一个对象在某个时刻的状态，
 * 并在之后将对象恢复到这个状态。
 * 简单来说，就是让对象“记住过去”，以便“后悔时能回到原样”。
 */
// 备忘录类
class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
// 发起人类
class Originator {
    setState(state) {
        this.state = state;
        console.log("当前状态为：%s", this.state);
    }
    getState() {
        return this.state;
    }
    saveStateToMemento() {
        return new Memento(this.state);
    }
    restoreStateFromMemento(memento) {
        this.state = memento.getState();
        console.log("恢复状态为：%s", this.state);
    }
}
// 管理人类
class Caretaker {
    setMenento(memento) {
        this.memento = memento;
    }
    getMemento() {
        return this.memento;
    }
}
// 测试
class Main {
    static main() {
        const originator = new Originator();
        const caretaker = new Caretaker();
        originator.setState("state#1");
        originator.setState("state#2");
        caretaker.setMenento(originator.saveStateToMemento());
        originator.setState("state#3");
        originator.restoreStateFromMemento(caretaker.getMemento());
    }
}
Main.main();
