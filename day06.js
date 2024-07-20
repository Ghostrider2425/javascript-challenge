// Activity 1
const arr = [1,2,3,4,5]
console.log(arr);

const firstElement = arr[0]
const lastElement = arr[arr.length - 1]

console.log(firstElement);
console.log(lastElement);

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// Activity 2

arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(1)
console.log(arr);

// Activity  3
let newArr = arr.map((num) => num*2)
console.log(newArr);

const even = arr.filter(num => num%2==0)
console.log(even);

const sum = arr.reduce((acc,curr) => acc+curr,0)
console.log(sum);

// Activity 4
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((num) => console.log(num))

const mulDimArray = [
    [100,200,300],
    [400,500,600],
    [700,800,900]
]

console.log(mulDimArray[1][2]);