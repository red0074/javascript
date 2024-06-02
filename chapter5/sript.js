//function definition
function myFunction() {
  console.log("hello");
  console.log("nothing");
}

//function call
myFunction();
myFunction();

//*we can call many times as we neededd

//->function with parameter
function myFun(msg) {
  console.log(msg);
}

myFun("this is an argument passing");

//->function with multiple parameter
function sum(a, b) {
  console.log(a + b);
}
sum(2, 3);

//function with return variable

function product(a, b) {
  s = a * b;
  return s;
}
console.log(product(2, 3));

//arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(5, 6);

//with return
const arrowMul = (a, b) => {
  return a * b;
};
console.log(arrowMul(2, 3));

//without params
const printHello = () => {
  console.log("hello");
};
printHello();
