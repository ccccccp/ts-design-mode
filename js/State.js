/**
 * 状态模式
 * 状态模式（State Pattern） 是一种 行为型设计模式，
 * 用于让一个对象在 其内部状态改变时，能 改变它的行为，看起来就像是改变了它的类一样。
 * 换句话说：
 * 当一个对象的行为依赖于它的状态（比如“开/关”、“登录/未登录”、“播放/暂停”等），
 * 状态模式可以把这些行为封装到不同的状态类中，
 * 从而避免大量的 if...else 或 switch 判断。
 */
//环境类
class Light {
    constructor() {
        this.state = new OffState();
    }
    setState(state) {
        this.state = state;
    }
    pressSwitch() {
        this.state.pressSwitch(this);
    }
}
// 关闭状态
class OffState {
    pressSwitch(light) {
        console.log("开灯");
        light.setState(new OnState());
    }
}
class OnState {
    pressSwitch(light) {
        console.log("关灯");
        light.setState(new OffState());
    }
}
class Main {
    static main() {
        const light = new Light();
        light.pressSwitch();
        light.pressSwitch();
        light.pressSwitch();
    }
}
Main.main();
