///function addNumbers(...nums:number[]) {
 //   var i;
 //   var sum:number = 0;
  //  console.log([...nums]);//spread operator

//    for(i = 0;i<nums.length;i++) {
  //      sum = sum + nums[i];
 //   }
  //  console.log("sum of the numbers,sum")
//}
//addNumbers(1,2,3)
//addNumbers(10,10,10,10,10)

var foo = (x: number) => 10 + x //return is implicit

var foo = (x: number) => {
    return 10 + x
}

// const foo = function (x: number)
//     return 100 + x;
console.log(foo(100))