/**
 * 命令模式
 * 命令模式是一种行为型设计模式（Behavioral Pattern），它的核心思想是：
 * 将请求（命令）封装为一个对象，从而让你可以用不同的请求、队列或者日志来参数化对象。
 * 这样可以让“发出命令的对象”和“执行命令的对象”彻底解耦。
 */

// Command接口
interface Command {
    execute():void
}

// 具体命令：开灯
class LightOnCommand implements Command {
    private light:Light

    constructor(light:Light) {
        this.light = light
    }
    execute(): void {
        this.light.turnOn()
    }
}
// 具体命令：关灯
class LightOffCommand implements Command {
    private light:Light

    constructor(light:Light) {
        this.light = light
    }
    execute(): void {
        this.light.turnOff()
    }
}
// 接收者（真正执行命令）
class Light {
    turnOn(){
        console.log("开灯")
    }
    turnOff(){
        console.log("关灯")
    }
}
// 调用者（遥控器）
class RemoteControl {
    private command:Command
    setCommand(command:Command){
        this.command = command
    }
    pressButton() {
        this.command.execute()
    }
}
// 客户端
class Main {
    static main() {
        const light = new Light()
        const turnOnCmd:Command = new LightOnCommand(light)
        const turnOffCmd:Command = new LightOffCommand(light)

        const control:RemoteControl = new RemoteControl()

        control.setCommand(turnOnCmd)
        control.pressButton()// 开灯

        control.setCommand(turnOffCmd)
        control.pressButton()// 关灯

    }
}
Main.main()