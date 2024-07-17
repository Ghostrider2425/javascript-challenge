// Activity 1
let num = 7

if(num>0){
    console.log("Number is positive");
}
else if(num == 0) {
  console.log("Number is zero");
}
else {
    console.log("Number is negative");
}

let age = 19
if(age>=18){
    console.log("person is eligible to vote");
}
else {
    console.log("person cannot cast vote");
}

// Activity 2
let a = 70 
let b = 110
let c = 90

if(a<b){
    if(b<c){
        console.log("c is largest");
    }
    else if(b>c){
        console.log("b is largest");
    }
}
else if(a>b) {
    if(b>c){
        console.log("a is largest");
    }
}

//Activity 3

let day = 4
switch(day){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break;
    case 3 : console.log("Wednesday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break;
    case 6 : console.log("Saturday");
    break;
    case 7 : console.log("Sunday");
    break;
    default :
    console.log("Invalid day");
}

let score = 70
switch(true){
    case(score>=90 && score <=100) : console.log("grade is A");
    break;
    case(score>=80 && score <=90) : console.log("grade is B");
    break;
    case(score>=70 && score <=80) : console.log("grade is C");
    break;
    case(score>=40 && score <=70) : console.log("grade is D");
    break;
    case(score<40) : console.log("grade is F");
    break;
    default :
    console.log("Invalid grade");
}

// Activity 4
let number = 100
let result = (number%2==0)?"number is even" : "number is odd"
console.log(result);

// Activity 5

let year = 2024
if((year%4==0 && year%100 !==0) || year %400 ==0){
    console.log(`${year} is a leap year` );
}
else {
    console.log(`${year} is not a leap year`);
}