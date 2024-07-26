class Person {
    constructor(firstName,lastName ){
        this.firstName = firstName;
        this.lastName= lastName;
    }

        get fullName(){
            return `${this.firstName} ${this.lastName}`
        }

        set fullName(name){
            // split full name into first and last names
            const names = name.split(' ');
            this.firstName = names[0];
            this.lastName= names[1];
        }
  }
  const person = new Person("Aryan" , "Roy");
  console.log(person.fullName);

  person.fullName = "Ayush Kumar"

  console.log(person.fullName);