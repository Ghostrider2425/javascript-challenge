// Activtiy 1
let num1 = 10
let num2 = 5

let sum = num1+ num2
console.log(sum); // 15

let sub = num1 - num2
console.log(sub);// 5

let mul = num1 * num2
console.log(mul);// 50

let div = num1/num2
console.log(div);//2

let rem = num1 % num2
console.log(rem);// 0

// Activity 2
let ans = 5
num1 += num2
console.log(num1);//15

num1 -= num2
console.log(num1);//10

// Activity 3
console.log(num1>num2);
console.log(num1<num2);

console.log(num1 >= num2);
console.log(num1 <= num2);

console.log(4 == "4"); // true // loose check
console.log(4 === "4"); // false // strict check

let a = true
let b = false

console.log(a && b);
console.log(a || b);
console.log(!a);

let num = 10
 let result = num>0 ? "number is positive" : "number is less than 0"
console.log(result);

// feature request

let firstNum = 10
let secNum = 5

console.log(`Addition is : ${firstNum + secNum}`);
console.log(`Substraction is : ${firstNum - secNum}`);
console.log(`Multiplication is : ${firstNum * secNum}`);
console.log(`Division is : ${firstNum / secNum}`);
console.log(`Remainder is : ${firstNum%secNum}`);
