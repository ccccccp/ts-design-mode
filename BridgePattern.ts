/**
 * 桥接模式
 * 将抽象部分与实现部分分离，使它们可以独立变化
 **/

 // 实现接口
 interface Color {
    applyColor():void
 }

 // 实现类
 class Red implements Color {
    applyColor(): void {
        console.log("填充红色")
    }
 }
 class Yello implements Color {
    applyColor(): void {
        console.log("填充黄色")
    }
 }

 // 抽象类
 abstract class Shape{
    protected color:Color
    constructor(color:Color) {
        this.color = color// 持有实现类引用
    }
    abstract draw():void
 }

 // 扩展抽象类

 class Circle extends Shape{
    constructor(color:Color){
        super(color)
    }
    draw(){
        console.log("画圆形");
        this.color.applyColor()// 实现
    }
 }

 class Square extends Shape {
    constructor(color:Color){
        super(color)
    }
    draw(){
        console.log("画矩形");
        this.color.applyColor()
    }
 }

 class Main {
    static main(){
        const yellow = new Yello()
        const red = new Red()

        const circle = new Circle(yellow)
        const square = new Square(red)

        circle.draw()
        square.draw()
    }
 }
 Main.main()