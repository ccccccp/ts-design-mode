/**
 * 迭代器模式（Iterator Pattern）是一种行为型设计模式，
 * 用于在不暴露集合内部结构的情况下，顺序访问集合中的元素。
 */
interface MyIterator<T> {
    hasNext():boolean
    next():T
}

function IteratorCreater(){
    const names:string[] = ["Tom", "Jerry", "Lucy", "Lily"];
    class NameIterator implements MyIterator<string> {
        private index:number = 0;

        public hasNext(): boolean {
            return this.index < names.length;
        }
        next(): string {
            return names[this.index++]
        }
    }
    return {
        create:() => {
            return new NameIterator()
        }
    }
}

class Main {
    static main(){
        const namesIterator = IteratorCreater().create()
        while(namesIterator.hasNext()) {
            console.log(namesIterator.next())
        }
    }
}

Main.main()