/**
 * 观察者模式
 * 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象（Subject）。
 * 当主题对象的状态发生改变时，所有依赖它的观察者都会收到通知并自动更新。
 */

// 观察者接口
interface Observer {
    update(msg:string):void
}
// 主题接口
interface Subject {
    attach(observer:Observer):void
    detach(observer:Observer):void
    notifyObservers(msg:string):void
}

// 具体主题
class NewsAgency implements Subject {
    private list:Observer[]=[]
    public attach(observer: Observer): void {
        this.list.push(observer)
    }

    public detach(observer: Observer): void {
        this.list = this.list.filter(o => o!=observer)
    }
    public notifyObservers(msg: string): void {
        this.list.forEach((observe) => {
            observe.update(msg)
        })
    }
    public publishNews(news:string) {
        console.log("发布新闻：%s",news)
        this.notifyObservers(news)
    }
}
// 具体观察者
class Subscriber implements Observer {
    private name:string
    constructor(name:string){
        this.name = name
    }
    public update(msg: string): void {
        console.log("%s 收到新闻更新：%s", this.name,msg)
    }
}

class Main{
    static main(){
        const agency:NewsAgency  = new NewsAgency()
        
        const ob1:Observer = new Subscriber("张三")
        const ob2:Observer = new Subscriber("里斯")

        agency.attach(ob1)
        agency.attach(ob2)

        agency.publishNews("我来了！")

    }
}
Main.main()