// Activity 1


function checkEvenOdd(num){
    if(num%2==0){
        console.log(" Given Number is even");
    } else {
        console.log("Given number is odd");
    }
}

checkEvenOdd(5)

function calculateSquare(n){
    let square = n*n;
    console.log(square);
}
calculateSquare(12)

// Activity 2

function checkMaximum(num1 , num2){
    if(num1>num2){
        console.log(`${num1} is maximum`);
    } else {
        console.log(`${num2} is maximum`);
    }
}

checkMaximum(5,7)

function concatString(str1 , str2){
    let str = str1 + str2
    console.log(str);
}

concatString("John " , "Cena")

// Activity 3


 const sum = (num1 , num2) => {
  return num1 + num2
}
console.log(sum(3,4));

let checkString = (str) => {
    console.log(str.includes("x"));
}
checkString("hitesh")



// Activity 4

const product = (num1 , num2 =19) => {
    let result = num1*num2;
    console.log(result);
}
product(5)

greetingIs = (name , age =18) => {
    console.log("Welcome : " + name + `! Your age is ${age}`);
}
greetingIs("Hitesh")

// Activtiy 5

function repeat(num , func){
    return function(){
        for(let i =0;i<num;i++){
            func()
        }
    }
}

function sayHello(){
    console.log("Hitesh");
}

let helloTimes = repeat(3,sayHello)
helloTimes()

const highOrderFunc = (func1, func2, value) => {
    func1(value); /*expected 8*/
    func2(a); /*expected 13*/
  };
  
  let cube = (num1) => {
    a = num1 ** 3;
    return a;
  };
  
  let addFive = (num2) => {
    console.log(num2 + 5);
  };
  
  highOrderFunc(cube, addFive, 2);

