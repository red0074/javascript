let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText = "unique value 1";
// divs[1].innerText = "unique value 2";
// divs[2].innerText = "unique value 3";

let idx = 1;
for (let div of divs) {
  console.log(div.innerText);
  div.innerText = `unique value ${idx++}`;
}
for (let div of divs) {
  console.log(div.innerText);
}
