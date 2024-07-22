// Activity 01
document.querySelector('#box1').textContent = "Task 01";

document.querySelector(".box").style.backgroundColor = "pink";

const newDiv = document.createElement("div");
newDiv.textContent = "Append new div";
document.body.appendChild(newDiv)

const ul = document.getElementById("list1")
 const newli = document.createElement("li")
 newli.textContent= "Task 04";
 ul.appendChild(newli);

 let item_to_remove = document.getElementById("item_to_remove");
 ul.removeChild(item_to_remove)

 const removeLastChildren = document.getElementById("div_with_children")
 div_with_children.removeChild(div_with_children.lastElementChild)

 let selected_image = document.getElementById("pexels")
 selected_image.src ="https://images.pexels.com/photos/17696222/pexels-photo-17696222/free-photo-of-man-with-backpack-walking-down-stairs-by-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

 let para = document.getElementById("myPara");
 para.classList.add("newClass")

 setTimeout(()=>{
    para.classList.remove("newClass");
 },4000)

 let newpara = document.querySelector(".new_para")
 let btn = document.querySelector("button")

 btn.addEventListener("click", ()=>{
    newpara.textContent = "javascript challenge"
 })
btn.addEventListener("mouseover" , ()=> {
    btn.style.border = "2px solid red"
})