//quick revise of query selector and event listener
// let modebtn = document.querySelector("#mode");
// modebtn.addEventListener("click", () => {
//   console.log("you are trying to change the mode");
// });

let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").style.color = "white";
    document.querySelector("body").classList.add("dark");
  } else {
    currmode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector("body").style.color = "black";
    document.querySelector("body").classList.add("light");
  }
  console.log(currmode);
});

//instead of using direct styling from js we can use class of css
