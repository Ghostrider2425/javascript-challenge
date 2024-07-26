class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
         greet(){
            return `Hello my name is ${this.name} and I am ${this.age} years old !`
        }

        updateAge(newAge){
            this.age = newAge;
            console.log(`Updated age is : ${this.age}`);
        }
    }

    const person = new Person("Aryan" ,20);
    console.log(person.greet()); // Hello my name is Aryan and I am 20 years old !

    person.updateAge(21); // Updated age is : 21

    console.log(person.greet()); // Hello my name is Aryan and I am 21 years old !
