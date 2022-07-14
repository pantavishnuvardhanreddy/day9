var Greeting = /** @class */ (function () {
    class Greeting {
        constructor() {
        }
        great() {
            console.log("Hello World!!!");
        }
    }
    return Greeting;
}());
var obj = new Greeting();
obj.great();