class Person {
    constructor(firstName,lastName ){
        this.firstName = firstName;
        this.lastName= lastName;
    }

        get fullName(){
            return `Fullname is ${this.firstName} ${this.lastName}`
        }
  }
  const person = new Person("Aryan" , "Roy");
  console.log(person.fullName);