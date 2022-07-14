var global_num = 12; //global variable 
var num = /** @class */ (function () {
    function num() {
        this.num_val = 13; //class variable 
    }
    num.prototype.storeNum = function () {
    };
    num.sval = 10; //static field 
    return num;
}());
console.log("Global num: " + global_num);
console.log(numbers.sval); //static variable  
var Obj = new numbers();
console.log("Global num: " + Obj.num_val);
