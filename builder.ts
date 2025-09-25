// 设计模式-Builder（生成器）模式

// 产品类
class Car {
    private engine:string;
    private wheels:string;
    private body:string;

    public setEngine(engine:string){
        this.engine = engine
    }

    public setWheels(wheels:string) {
        this.wheels = wheels
    }
    public setBody(body:string) {
        this.body = body
    }
    public toString(){
        return `[Car engine:${this.engine}, wheels:${this.wheels}, body:${this.body}]`
    }
}

// 抽象建造者

abstract class CarBuilder {
    protected car:Car = new Car();
    public abstract buildEngine():void;
    public abstract buildWheels():void;
    public abstract buildBody():void;
    public getCar(){
        return this.car
    }
}

// 具体建造者A
class BmwBuilder extends CarBuilder{
    public buildEngine():void{
        this.car.setEngine("BMW-engine-turbo!")
    }
    public buildBody(): void {
        this.car.setBody('BMW-car-body')
    }
    public buildWheels(): void {
        this.car.setWheels('BMW-wheels!')
    }
}

// 具体建造者B
class TeslaBuilder extends CarBuilder{
    public buildEngine():void{
        this.car.setEngine("Tesla-engine")
    }
    public buildBody(): void {
        this.car.setBody('Tesla-car-body!')
    }
    public buildWheels(): void {
        this.car.setWheels('Tesla-car-wheels!')
    }
}

// 指挥者
class CarDirector {
    private builder:CarBuilder
    constructor(builder:CarBuilder) {
        this.builder = builder
    }
    construct():Car{
        this.builder.buildBody()
        this.builder.buildEngine()
        this.builder.buildWheels()
        return this.builder.getCar()
    }
}

class Client {
    static main(){
        const director = new CarDirector(new BmwBuilder())
        const bmw = director.construct()
        console.log(`${bmw}`)

        const director2 = new CarDirector(new TeslaBuilder())
        const tesla = director2.construct()
        console.log(`${tesla}`)
    }
}

Client.main()