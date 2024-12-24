//document that is visible : dom- Documnent Object Model
let elem=document.getElementById('click');
console.log(elem);
let elemclass=document.getElementsByClassName("container");
//elemclass[0].style.background="yellow";
console.log(elemclass);
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

console.log(elemclass.innerHTML);
console.log(elemclass.innerText);
console.log(elemclass[0].innerHTML);
tn =document.getElementsByTagName("div");
console.log(tn);
createdElement= document.createElement('p');
createdElement.innerText="This is a created para";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
//  removeChile(element); //removes an element

sel=document.querySelector(".container")
sel=document.querySelectorAll(".container")
console.log(sel)

function clicked(){
    console.log("The fucntion was clicked")
}
window.onload=function(){
    console.log("The document was loaded")
}
//events in JavaScript
// firstcontainer.addEventListener('click',function(){
//     console.log("click on container")
// })

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container using mouseover") //when mouse on element the function fires
// })

// firstcontainer.addEventListener('mouseout',function(){
//    console.log("mouse outside container") //when mouse outside elemet attached to eventlistener, 
// })

let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log("mouse above the container") //mouse is above the container when clicked
})

firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
    console.log("mouse below the container") //mouse down when clicked
})

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
//     console.log("clicked on container")
// })