let div = document.querySelector("div");
console.log(div);
//gives the value of the attribute
let id = div.getAttribute("id");
console.log(id);

//set the attribute
let para = document.querySelector("p");
console.log(para.setAttribute("class", "nothing"));
console.log(para.getAttribute("class"));

//style attribute
let style_box = document.querySelector("div#style-box");
console.log(style_box.getAttribute("id"));
style_box.style.backgroundColor = "red";

//create a button
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

//adding the button using append
let div0 = document.querySelector("#insertEl");
console.log(div0);
div0.append(newBtn);

//adding the button using prepend
newBtn.style.color = "purple";
newBtn.style.fontSize = "34px";
div0.prepend(newBtn);

//adding the button using before
newBtn.style.color = "red";
div0.before(newBtn);

//adding the button using after
div0.after(newBtn);

//removing the button
newBtn.remove();
