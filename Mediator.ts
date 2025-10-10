/**
 * 中介者模式（Mediator Pattern） 是一种行为型设计模式，
 * 它通过一个中介对象来封装一系列对象之间的交互，
 * 使对象之间不再相互引用，从而降低它们之间的耦合度，
 * 并使它们的交互可以独立地变化
 */

// 抽象中介者
interface ChatMediator {
    sendMessage(msg: string, user: User): void
    addUser(user: User): void
}
// 具体中介者
class ChatRoom implements ChatMediator {
    private userList:Array<User>=[]

    sendMessage(msg: string, user: User): void {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i] !== user) {
                this.userList[i].receive(msg)
            }
        }
    }
    addUser(user: User): void {
        if (this.userList.findIndex(u => u == user) == -1) {
            this.userList.push(user)
        }
    }
}

// 抽象用户类
abstract class User {
    abstract send(msg: string): void
    abstract receive(msg: string): void
    protected chatMediator: ChatMediator
    protected name: string

    constructor(chatMediator: ChatMediator, name: string) {
        this.chatMediator = chatMediator
        this.name = name
    }
}
// 具体用户类
class ChatUser extends User {
    constructor(chatMediator: ChatMediator, name: string) {
        super(chatMediator, name)
    }
    send(msg: string): void {
        console.log("%s 发送消息: %s", this.name, msg)
        this.chatMediator.sendMessage(msg, this)
    }
    receive(msg: string): void {
        console.log("%s 接收消息：%s", this.name, msg)
    }
}

class Main {
    static main() {
        const mediator = new ChatRoom()
        const u1 = new ChatUser(mediator, "小明")
        const u2 = new ChatUser(mediator, "小红")
        const u3 = new ChatUser(mediator, "小习")

        mediator.addUser(u1)
        mediator.addUser(u2)
        mediator.addUser(u3)
        u1.send("大家好,我是小明！")

    }
}
Main.main()