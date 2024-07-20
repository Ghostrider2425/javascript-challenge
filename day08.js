// Activity 1
let name = "John"
let age = 20

console.log(`person name is ${name} and age is ${age}`);

const multiLine = `
This is a multi line string 
It spans over more than
one line `

console.log(multiLine);

//Activity 2

const arr = [1,2,3,4,5]

const[firstNumber , secondNumber] = arr
console.log("First Number :" , firstNumber);
console.log("Second Number : " ,secondNumber);

const books = {
    title : "Atomic habits",
    author : "James Clear",
    year : 2000
}

const {title , author } = books
console.log(`Book title is ${title} and author is ${author}`);

// Activity 3
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

// const arr3 = [...arr1,...arr2]
 const arr3 = [...arr1 ,6,7,8]
console.log(arr3);

const numbers = [1,2,3,4,5]

const sum = (...numbers) => {
   return numbers.reduce((total , num) => total+num , 0)
}

console.log(sum(1,2,3,4,5));

// Activity 4
const product = (num1 , num2 =1) => {
    return num1*num2
}
console.log(product(4,7));
console.log(product(7));

// Activity 5
const objectLiterals = {
    firstName  : "Aryan",
    lastName : "Roy",
    age : 20,
    fullname(firstName,lastName){
        return `Fullname : ${firstName} ${lastName}`
    }
};
console.log(objectLiterals);
console.log(objectLiterals.fullname(objectLiterals.firstName , objectLiterals.lastName));
//console.log(objectLiterals.fullname("Aryan" , "Roy"));



const firstName = "Aryan";
const lastName = "Roy";
const ageofperosn  = 21;

const computedObject = {
    firstName,
    lastName,
    ageofperosn
}
console.log(computedObject);