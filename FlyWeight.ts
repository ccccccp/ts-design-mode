/**
 * 享元模式（FlyWeight）
 * 享元模式是一种 结构型设计模式，它的核心思想是：
 * 运用共享技术有效支持大量细粒度对象的复用，避免对象数量过多导致的内存开销。
 */

// 抽象享元
interface Ichess {
    draw(x:number,y:number):void
}

// 具体享源
class Chess implements Ichess {
    private color:string;
    constructor(color:string) {
        this.color = color
    }
    draw(x:number,y:number){
        console.log(`在位置(${x},${y}) 放下${this.color} 棋子`)
    }
}

// 享元工厂
class ChessFactory {
    static ChessMap = new Map()
    static getChess(color:string):Chess {
        const target = ChessFactory.ChessMap.get(color)
        if(target) {
            return target
        } else {
            const newChess = new Chess(color)
            ChessFactory.ChessMap.set(color, newChess)
            return newChess
        }

    }
}
//client
class Main {
    static main(){
        const whiteChess = ChessFactory.getChess("white")
        whiteChess.draw(1,3)
        const blackChess = ChessFactory.getChess("black")
        blackChess.draw(2,4)

        const whiteChess2 = ChessFactory.getChess("white")
        whiteChess2.draw(3,5)

        console.log(whiteChess === whiteChess2)// true 共享了一个对象
    }
}

Main.main()