let arr = [1, 2, 3, 4, 5];
//call back using function keyword
arr.forEach(function printVal(val) {
  console.log(val);
});
//call back function using arrow function
let cities = ["pune", "hyderabad", "chennai", "vijayawada"];
cities.forEach((val) => {
  console.log(val.toUpperCase());
});

//map
//to print the array
let nums = [67, 52, 39];
arr.map((val) => {
  console.log(val);
});
//to copy the arr into newarr
let newArr = arr.map((val) => {
  return val;
});
console.log(newArr);

//filter
//even numbers
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let newArr1 = arr1.filter((val) => {
  return val % 2 === 0;
});
console.log(newArr1);

//reduce
//sum of array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = arr2.reduce((res, curr) => {
  return res + curr;
});
console.log(ans);
//max ele in array
let arr3 = [5, 6, 2, 1, 3];
let output = arr3.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(output);
