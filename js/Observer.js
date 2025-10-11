/**
 * 观察者模式
 * 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象（Subject）。
 * 当主题对象的状态发生改变时，所有依赖它的观察者都会收到通知并自动更新。
 */
// 具体主题
class NewsAgency {
    constructor() {
        this.list = [];
    }
    attach(observer) {
        this.list.push(observer);
    }
    detach(observer) {
        this.list = this.list.filter(o => o != observer);
    }
    notifyObservers(msg) {
        this.list.forEach((observe) => {
            observe.update(msg);
        });
    }
    publishNews(news) {
        console.log("发布新闻：%s", news);
        this.notifyObservers(news);
    }
}
// 具体观察者
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(msg) {
        console.log("%s 收到新闻更新：%s", this.name, msg);
    }
}
class Main {
    static main() {
        const agency = new NewsAgency();
        const ob1 = new Subscriber("张三");
        const ob2 = new Subscriber("里斯");
        agency.attach(ob1);
        agency.attach(ob2);
        agency.publishNews("我来了！");
    }
}
Main.main();
