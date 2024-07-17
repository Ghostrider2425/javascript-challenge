// Activity 1
for (let index = 1; index <=10; index++) {
    console.log(index +" ");
}

for(let i = 1; i<=10 ;i++){
    console.log(5*i +" ");
}

// Activity 2
let sum = 0
let n = 1
while(n<=10){
    sum+=n;
    n++
}
console.log(sum)

let num = 10
while(num>0){
    console.log(num);
    num--
}

// Activity 3
let number = 1
do{
    console.log(number)
    number++;
}while(number<=5)

// let s = 5
// let factorial = 1
// let i = 1
// do{
//     factorial*=i
//     i++
// }while(i<=s)
//     console.log(factorial);

let fact = 1;
let s=5
do{
    fact*=s
    s--
}while(s>0)
    console.log(fact);


// Actvity 4
let line =5
let pattern = ""
for(let i =1;i<=5;i++){
    for(let j =1;j<=i;j++){
        pattern+="* "
    }
    pattern+='\n'
}
console.log(pattern);






// Activity 5
for(let ind =1;ind<=10;ind++){
    if(ind==5) continue;
    console.log(`ind : ${ind}`);
}

for(let n = 1;n<=10;n++){
    if(n==7) break;
    console.log(n);
}