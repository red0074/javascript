console.log("hello1");
window.console.log("hello2");

// alert("nothing1");
// window.alert("nothing2");

console.log(window.document);
console.dir(window.document);
//print the properties of body tag
console.dir(document.body);
//print the childnodes of body
console.dir(document.body.childNodes[1]);

//to change the background color
document.body.style.background = "green";

//to change the text of the heading
document.body.childNodes[5].innerText = "nothing";

//to get h1 html code with the id
let heading = document.getElementById("heading");
console.log(heading);

//to get with help of class
let testing = document.getElementsByClassName("test");
console.dir(testing);

//to get with help of tag
let test = document.getElementsByTagName("p");
console.dir(test);

//query selector
//only first node
let firstel = document.querySelector("p");
console.dir(firstel);

//all nodes
let allel = document.querySelectorAll("p");
console.dir(allel);

//properties
//->tagName
console.log(firstel.tagName);
//->innerText:
let div = document.querySelector(".fruits");
console.dir(div);
