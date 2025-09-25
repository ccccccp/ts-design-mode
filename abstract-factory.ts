// 设计模式 - 抽象工厂模式
// 抽象产品
interface Button {
    click():void
}
interface TextField {
    input():void
}
// 具体产品
 class MacButton implements Button {
    public click(){
        console.log("mac按钮点击")
    }
 }
 class WindowsButton implements Button {
    public click(){
        console.log('windows 按钮点击')
    }
 }

 class MacTextField implements TextField {
    public input(){
        console.log("mac 文本框输入")
    }
 }
 class WindowsTextField implements TextField {
    public input(){
        console.log("windows 文本框输入")
    }
 }

 // 抽象工厂
 interface GUIFactory {
    createButton():Button;
    createTextField():TextField
 }

 // 具体工厂
 class MacFactory implements GUIFactory {
    public createButton(){
        return new MacButton()
    }
    public createTextField(){
        return new MacTextField()
    }
 }

 class WindowsFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowsButton()
    }
    public createTextField():TextField {
        return new WindowsTextField()
    }
 }

 class Client {
    static main() {
        const factory:GUIFactory = new WindowsFactory()// MacFactory,WindowsFactory方便替换
        const button:Button = factory.createButton()
        const textField:TextField = factory.createTextField()
        button.click()
        textField.input()
    }
 }
 Client.main()