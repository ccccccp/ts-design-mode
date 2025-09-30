/**
 * 代理模式（Proxy pattern）为其他对象提供一种代理以控制对这个对象的访问。
 * 简单说，就是 通过一个代理对象，来间接访问目标对象，从而在访问前后增加一些额外的逻辑（如权限校验、延迟加载、日志记录、远程调用等）
 */

// 抽象主题
interface Subject {
    request(...args: any[]): void
}

// 真实主题
class RealSubject implements Subject{
    request(...args: any[]): void {
        console.log("真实请求",...args)
    }
}

// 代理主题
class RoleProxy implements Subject {
    private role:string;
    private realSubject:Subject;

    constructor(role:string){
        this.role = role
    }
    public request(...args: any[]): void {
        if(this.role == 'admin') {
            if(this.realSubject == null) {
                this.realSubject = new RealSubject()
            }
            this.realSubject.request(...args)
        } else {
            console.log("request 无权访问")
        }
    }
}

class Main {
    static main(){
        const p1:Subject = new RoleProxy("admin")
        p1.request("/aa")

        const p2 = new RoleProxy("guest")
        p2.request("/aa") 
    }
}
Main.main()