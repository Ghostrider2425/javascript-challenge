class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
        static greet(){
            return `Hello my name is Aryan  and I am 20 years old !`
        }
  }

  console.log(Person.greet());