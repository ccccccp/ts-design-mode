// 具体元素（被访问器访问的元素）
class Movie {
    constructor(name, ratio) {
        this.name = name;
        this.ratio = ratio;
    }
    accept(visitor) {
        visitor.visitMovie(this);
    }
}
class Book {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    accept(visitor) {
        visitor.visitBook(this);
    }
}
// 具体访问器
class InfoVisitor {
    visitBook(book) {
        console.log("访问书籍：%s,价格：%s", book.name, book.price);
    }
    visitMovie(movie) {
        console.log("访问电影：%s,评分：%s", movie.name, movie.ratio);
    }
}
// 折扣访问
class DiscountVIsitor {
    visitBook(book) {
        console.log("book：%s,Discount Price：%s", book.name, book.price * 0.9);
    }
    visitMovie(movie) {
        console.log("movie: %s,discount ratio：%s", movie.name, movie.ratio + 0.5);
    }
}
class Demo {
    static main() {
        const products = [
            new Movie("战狼2", 0.1),
            new Book("王志安谈治国理政", 5)
        ];
        const infoVisitor = new InfoVisitor();
        const disVisitor = new DiscountVIsitor();
        products.forEach((product) => {
            product.accept(infoVisitor);
            product.accept(disVisitor);
        });
    }
}
Demo.main();
