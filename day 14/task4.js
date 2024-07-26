class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
         greet(){
            return `Hello my name is ${this.name} and I am ${this.age} years old !`
        }
  }

class Student extends Person {
    constructor(name , age , studentId){
        super(name , age);

        this.studentId = studentId;
    }
    getStudentId(){
        return this.studentId;
    }

    greet(){
        return `hello I am ${this.name} and I am ${this.age} years old and my student Id is ${this.studentId}`
    }
}

const student = new Student("Aryan" ,20 , 'A1234');
console.log(student.greet()); // hello I am Aryan and I am 20 years old and my student Id is A1234