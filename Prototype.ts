abstract class Prototype {
    clone(){}
}

class ConcretePrototype1 implements Prototype {
    public data:any
    constructor(data:any) {
        this.data = data
    }
    public clone(){
        return {
            ...this,
            getData:this.getData,
            setData:this.setData
        }
    }
    public getData(){
        return this.data
    }
    public setData(data:any){
        this.data = data
    }
}

class Main {
    static main(){
        const concretePrototype:ConcretePrototype1 = new ConcretePrototype1({
            aa:11
        })
        console.log(concretePrototype.data)

        const b:ConcretePrototype1 = concretePrototype.clone()
        console.log("b:",b)
        b.setData({aa:22})

        console.log(b.getData())

        
    }
}
Main.main()