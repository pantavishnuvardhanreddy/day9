var global_num = 12          //global variable 
class numbers{ 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Number.sval)   //static variable  
var obj = new Number(); 
console.log("Global num: "+obj.num_val) 