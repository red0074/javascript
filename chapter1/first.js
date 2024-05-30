console.log("first js program");
// ->variables:

radius = 28;
console.log(radius);
age = 21;
console.log(age);
age = age + 1;
console.log(age);

fullname = "dinesh";
console.log(fullname);
// name = "nothing";
// console.log(name);

price = 99.99;
console.group(price);

x = null;
//null means empty
console.log(x);

y = undefined;
//undefined means does not know ,but null means it is empty
console.log(y);

// variables are camelcase in javaScript
// we should reserved words to define variables
//there are three types of keywords in js

let fullName = "kirito";
console.log(fullName);

var age = 21;
console.log(age);
//as a good programmer we should nopt use var
//becuase it is too old and not used by many developer

// var cane be redeclared and updated
var number = 1;
var number = 6;
console.log(number);
//latest one will be printed,by redeclaring again which causes some confusion in large lines of code

// so we use let,which can updated but can not be redeclared

let Age = 21;
Age = 22;
Age = 3333;
console.log(Age);
//latest one will be printed

// we should not change the value once we declared we use const
const pi = 3.14;
// pi = 9.8;
//when executed give the error "typeError: Assignmnet to constant variable"

console.log(pi);

let a;
console.log(a);
// once a variable is declared but not assigned then it's value is undefined
a = 90;
console.log(a);
//this type is only available in let keyword only const can do this type of thing
//if any case it is done like that then , it shows a error "const must be declared"

// let,const are block scope variable ,means with in the flower brackets
// example
{
  let a = 10;
  //   let a=15;//give the error, "can't declare the block variable"
  console.log(a);
}
{
  let a = 18;
  console.log(a);
} //this wil be executed
// where as the var is a global scope variable

//->datatypes:
// two type of datatypes
// primitive:
//string,number,bigint,boolean,undefined,symbol,null
//nonprimitive:
//objects,array

// -->objects:
//it is a collection of values(key:value)
const student = {
  name: "nothing",
  age: 21,
  isPass: true,
};
console.log(student);
//accessing each keys
console.log(student.name);
console.log(student.age);
console.log(student["isPass"]);

//actually const variables can'be updated but the const objects keys can be updated
student["isPass"] = false;
console.log(student["isPass"]);
student.age = student.age + 1;
console.log(student.age);

//we can update the value
student.name = "dinesh";
console.log(student.name);
console.log(student);
