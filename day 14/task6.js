class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
         greet(){
            return `Hola espanol`
        }
  }

class Student extends Person {
    static  studentCount = 0;
    constructor(name , age , studentId){
        super(name , age);

        this.studentId = studentId;

        Student.studentCount+=1;
    }
   
}
console.log(`Total students : ${Student.studentCount}`);

const student1 = new Student("Aryan" , 20 , "A123");

console.log(`Total students : ${Student.studentCount}`);

const sutdent2 = new Student("Ayush" , 18 , "A1234");

console.log(`Total students : ${Student.studentCount}`);