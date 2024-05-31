//creation of strings
let str = "nothing";
let str1 = "nothign2";

//to get the length of the string
console.log(str.length);
//to get the character the certain index
console.log(str[0]);

//template literal
let specialString = `this is template literal`;
console.log(specialString);

//we use the literals for the objects
let obj = {
  item: "pen",
  price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//instead of
console.log("the cost of ", obj.item, " is ", obj.price, "rupees");

//escape characters
console.log("nothing \nis impossible");
console.log("nothing \tis impossible");

//string methods:
let string = "nothing";
console.log(string.toUpperCase());
let string1 = "NOTHING";
console.log(string.toLowerCase());
let string2 = "                    n o t h i n g     ";
console.log(string2);
console.log(string2.trim());
let string3 = "01234567";
console.log(string3.slice(0, 5));
let a = "nothing";
let b = " is impossible";
console.log(a.concat(b));
let string4 = "nothing";
console.log(string4.replace("no", "some"));
let string5 = "ilovedestroying";
console.log(string5.charAt(5));
