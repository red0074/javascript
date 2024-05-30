// single line comments
/* multi
line 
Comments*/
console.log("operators");
//arithematic operators
console.log("Arithematic operators:");
let a = 5;
let b = 2;
console.log("a =", a, " b =", b);
console.log("a+b =", a + b);
// let c = a + b;
// console.log("a+b =", c);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("a%b =", a % b);
console.log("a power b (or) a^b = ", a ** b);
//unary operators
a++; //a=a+1;
console.log("a ++ or a+1 = ", a);
b--; //b=b-1;
console.log("b-- or b-1 =", b);
//assignment operators
console.log("Assignment Operator: ");

let c = 2;
c += 2;
console.log("c+=2 =>", c);
c -= 2;
console.log("c-=2 =>", c);
c *= 2;
console.log("c*=2 =>", c);
c /= 2;
console.log("c/=2 =>", c);
c **= 2;
console.log("c**=2 =>", c);
c %= 2;
console.log("c%=2 =>", c);

//comparison operators
console.log("comparison operator");
let d = 5;
let e = 56;
console.log("d==e =>", d == e);
console.log("d!=e =>", d != e);
console.log("d===e =>", d === e);
console.log("d!==e =>", d !== e);
console.log("d>e =>", d > e);
console.log("d<e =>", d < e);
console.log("d<=e =>", d <= e);
console.log("d>=e =>", d >= e);

//logical operators
let f = 6;
let g = 5;

// let cond1 = f > g;
// let cond2 = f === 6;
// console.log("cond1 && cond2 =>", cond1 && cond2);

console.log("cond1 && cond2 =>", f > g && f === 6);

console.log("cond1 || cond2 =>", f < g || f === 6);

console.log("!(f>g) =>", !(f > g));

//conditional statements:

//if statement
let age = 21;
if (age >= 18) {
  console.log("You can vote");
}
age = 12;
if (age < 18) {
  console.log("You can not vote");
}

//if else statement
let Age = 25;
if (Age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

//else if statement
let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "pink";
}
console.log(color);

//ternary operator:
let marks = 99;
let res = marks >= 99 ? "O grade" : "Fail";
console.log(res);
