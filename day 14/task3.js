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
}
const student = new Student("Mohit" ,20 , 'A123');

console.log(student.getStudentId());// A123