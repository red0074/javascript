//question1
let button = document.createElement("button");
button.innerText = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);

//question2

let para = document.querySelector("p.content");
console.log(para.getAttribute("class"));
para.setAttribute("class", "newclass");
//the above function rewrite the attribute class of the paragraph
para.classList.add("content");

console.log(para.classList);
