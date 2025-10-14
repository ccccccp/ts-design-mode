/**
 * 访问者模式
 * 访问者模式（Visitor Pattern） 是一种 行为型设计模式，用于在不改变对象结构的前提下，为对象结构中的各元素增加新的操作。
 * 通俗理解：
 * 当你有一个固定结构（比如一堆不同类型的节点），但又希望对它们做不同的操作（打印、导出、计算等），就可以使用访问者模式。
 * 这样你不需要修改这些节点类本身，只需新建不同的访问者类即可实现不同的操作逻辑。
 */
// 访问者接口
interface Visitor {
    visitBook(book:Book):void
    visitMovie(movie:Movie):void
}
// 元素接口
interface Produce {
    accept(visitor:Visitor):void
}
// 具体元素（被访问器访问的元素）
class Movie implements Produce {
    public name:string
    public ratio:number
    constructor(name:string,ratio:number){
        this.name = name
        this.ratio = ratio
    }
    accept(visitor: Visitor): void {
        visitor.visitMovie(this)
    }
}

class Book implements Produce {
    public name:string
    public price:number
    constructor(name:string,price:number){
        this.name = name
        this.price = price
    }
    accept(visitor: Visitor): void {
        visitor.visitBook(this)
    }
}
// 具体访问器
class InfoVisitor implements Visitor {
    visitBook(book:Book){
        console.log("访问书籍：%s,价格：%s",book.name,book.price)
    }

    visitMovie(movie:Movie){
        console.log("访问电影：%s,评分：%s",movie.name,movie.ratio)
    }
}
// 折扣访问
class DiscountVIsitor implements Visitor {
    visitBook(book: Book): void {
        console.log("book：%s,Discount Price：%s",book.name,book.price * 0.9)
    }
    visitMovie(movie: Movie): void {
        console.log("movie: %s,discount ratio：%s",movie.name,movie.ratio + 0.5)
    }
}

class Demo {
    static main(){
        const products:Produce[] = [
            new Movie("战狼2",0.1),
            new Book("王志安谈治国理政",5)
        ]
        const infoVisitor = new InfoVisitor()
        const disVisitor = new DiscountVIsitor()

        products.forEach((product) => {
            product.accept(infoVisitor)
            product.accept(disVisitor)
        })

    }
}

Demo.main()