function IteratorCreater() {
    const names = ["Tom", "Jerry", "Lucy", "Lily"];
    class NameIterator {
        constructor() {
            this.index = 0;
        }
        hasNext() {
            return this.index < names.length;
        }
        next() {
            return names[this.index++];
        }
    }
    return {
        create: () => {
            return new NameIterator();
        }
    };
}
class Main {
    static main() {
        const namesIterator = IteratorCreater().create();
        while (namesIterator.hasNext()) {
            console.log(namesIterator.next());
        }
    }
}
Main.main();
