/**
 * 单例模式 Single pattern
 * 单例模式是一种创建型设计模式，确保一个类在整个程序运行期间只存在一个实例，并且提供一个全局访问点来获取这个实例
 * 当系统中某个类的对象只应存在一个时（如配置类、日志类、线程池、数据库连接池、缓存管理器），需要单例模式来保证：
 *  节省资源（避免重复创建）
 *  保持数据一致性（所有模块共享同一个实例）
 *  提供统一的全局访问接口
 */
class Singleton {
    public name:string = ''
    constructor(name:string) {
        this.name = name
    }
    private static instance: Singleton
    static getInstance(name:string):Singleton {
        if (Singleton.instance) {
            return Singleton.instance
        }
        const instance = new Singleton(name)
        Singleton.instance = instance
        return instance
    }
}

class Client {
    static main(){
        const i1 = Singleton.getInstance("111")
        const i2 = Singleton.getInstance("222")
        console.log(i1.name,i2.name)// 111,111
    }
}
Client.main()