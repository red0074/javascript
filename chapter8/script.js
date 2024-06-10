let btn1 = document.querySelector("#btn1");
//event handling
btn1.onclick = () => {
  console.log("clicked button");
};
//event obkjects
let obj = document.querySelector("div#obj");
obj.onmouseover = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
};
//event listener
let btn2 = document.querySelector("button#btn2");
btn2.addEventListener("click", () => {
  console.log("button clicked");
});
