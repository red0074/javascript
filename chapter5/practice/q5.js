let num = prompt("Enter the number");
let arr = [];
for (let i = 1; i <= num; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log("sum of array is ", sum);

let prodcut = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log("product of array is ", prodcut);
