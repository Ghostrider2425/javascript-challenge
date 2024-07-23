// Activity 1
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve("promise is resolved after 2000 ms")
  },2000)
})
promiseOne.then((message) => {
  //  console.log(message);
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("promise is rejected after 2000 ms")
    },2000)
})
promiseTwo.catch((error) => {
   // console.log(error);
})

// Activity 2

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Data fetched from server");
    },1000)
})

promise3.then((message) => {
   // console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data processed")
        },2000)
    }).then((message2) => {
       // console.log(message2);
    })
})
// Activity 3

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is resolved using async after 2000 ms")
    },2000)
})

async function asyncUse(){
    const message = await promise4
   // console.log("resolved message : " ,message);
}
asyncUse()

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This async function promise is reejcted after 1000 ms");
    },1000)
})

async function asyncUse2(){
    try {
        const message = await promise5
      //  console.log("promise message : " , message);
        
    } catch (error) {
       // console.log("promise error : " , error);
    }
}
asyncUse2()
// Activity 4

const url = "https://jsonplaceholder.typicode.com/todos"

const  getAllTodos = fetch(url)

getAllTodos.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log(data);
})
.catch((error) => {
   // console.log(error);
})

async function fetchData(){
    const response = await fetch(url)
    const result = await response.json()
   // console.log(result);

} 

fetchData()

// Activity 5
const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise 1 resolved");
    },3000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise 2 resolved")
    },4000)
})

const promiseThree= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 3 resolved")
    },2000)
})

Promise.all([promise1,promise2,promiseThree]).then((values) => {
    values.forEach((values) => {
        console.log(values);
    })
})

Promise.race([promise1,promise2,promiseThree])
.then((value) => {
    console.log("First promise resolved : ", value);
})