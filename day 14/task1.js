class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
         greet(){
            return `Hello my name is ${this.name} and I am ${this.age} years old !`
        }
    }


const person = new Person("Akshay" , 20);
console.log(person.greet());