/**
 * 抽象工厂方法模式
 */

// 抽象产品
interface IButton {
    click():void
}

// 具体产品类
class WindowsBtn implements IButton {
    click():void{
        console.log("windows pc click")
    }
}

class MacButton implements IButton {
    click(){
        console.log("mac pc click")
    }
}
// 抽象工厂
abstract class Factory {
    abstract createButton():IButton
}
// 具体工厂类
class WindowsButtonFactory implements Factory {
    createButton():IButton{
        return new WindowsBtn()
    }
}
class MacButtonFactory implements Factory {
    createButton(): IButton {
        return new MacButton()
    }
}

class Client {
    public static main(){
        const windowButtonFactory:WindowsButtonFactory = new WindowsButtonFactory()
        const windowBtn: WindowsBtn = windowButtonFactory.createButton()
        windowBtn.click()

        const macButtonFactory: MacButtonFactory = new MacButtonFactory()
        const macButton:MacButton = macButtonFactory.createButton()
        macButton.click()

    }
}
 Client.main()
