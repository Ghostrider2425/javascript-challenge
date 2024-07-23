let para = document.querySelector("#para")
let btn = document.querySelector("#btn")

btn.addEventListener("click" , (e) => {
    para.textContent = "This is a new paragraph"
});

let pic = document.getElementById("pic")
pic.addEventListener("dblclick" , () => {
    pic.style.opacity === "0" 
    ? pic.style.opacity ="1"
    : pic.style.opacity = "0"
})
let btn1 = document.querySelector("#btn1")
btn1.addEventListener("mouseover" , (e) => {
    btn1.style.backgroundColor = "blue"
})

btn1.addEventListener("mouseout" , () => {
    btn1.style.backgroundColor = "red"
})

const input = document.getElementById("input")
input.addEventListener("keydown" , (e) => {
    console.log("Key pressed : " , e.key);
})

const newPara = document.getElementById("newPara")
input.addEventListener("keyup" , ()=> {
    newPara.textContent = `Current value : ${input.value}`
})

const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(myForm)
    for (const [key , value] of formData.entries()) {
        console.log(`${key} : ${value}`);
    }
})