let items = [250, 645, 300, 900, 50];
//1st method
let i = 0;
for (let val of items) {
  let offer = val / 10;
  items[i] -= offer;
  console.log(`value after offer is ${items[i]}`);
  i++;
}
//2nd method
let items0 = [250, 645, 300, 900, 50];
for (let i = 0; i < items0.length; i++) {
  let offer = items0[i] / 10;
  items0[i] -= offer;
}
console.log(items0);

//3rd method
let items1 = [250, 645, 300, 900, 50];
for (let item in items1) {
  let offer = items1[item] / 10;
  items1[item] -= offer;
}
console.log(items1);
