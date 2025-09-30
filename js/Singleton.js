var Singleton = /** @class */ (function () {
    function Singleton(name) {
        this.name = '';
        this.name = name;
    }
    Singleton.getInstance = function (name) {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        var instance = new Singleton(name);
        Singleton.instance = instance;
        return instance;
    };
    return Singleton;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        var i1 = Singleton.getInstance("111");
        var i2 = Singleton.getInstance("222");
        console.log(i1.name, i2.name);
    };
    return Client;
}());
Client.main();
