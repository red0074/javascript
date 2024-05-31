// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

//=>for loop
for (let i = 0; i <= 5; i++) {
  console.log("hello");
}

console.log("sum of number from 1 to 5");
let sum = 0;
for (let j = 1; j <= 5; j++) {
  sum += j;
}
console.log(sum);

//=>while loop
let k = 1;
while (k <= 5) {
  console.log("k = ", k);
  k++;
}

//=>do-while loop
let l = 1;
do {
  console.log("l = ", l);
  l++;
} while (l <= 5);

//for-of loop
let str = "nothing";
let size = 0;
for (let val of str) {
  console.log(val);
  size++;
}
console.log("size of the string = ", size);

//for in loop
let student = {
  name: "nothing",
  age: 99999,
  power: "limitless",
  isGod: true,
};
//to get the keys:
for (let i in student) {
  console.log("i = ", i);
}
//to get the keys and values
for (let key in student) {
  console.log("key = ", key, "value = ", student[key]);
}
