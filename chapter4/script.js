let marks = [76, 56, 45, 45, 34, 34];
console.log(marks);
console.log(marks.length);

let stu = ["ht", "hrt", "rth", "rth", "rth"];
console.log(stu);
//array indices
console.log(marks[0]);
console.log(marks[6]);

//looping in array
let heros = ["ironman", "thor", "spiferman", "hulk"];
for (let idx = 0; idx < heros.length; idx++) {
  console.log(heros[idx]);
}
//for-of
for (let el of heros) {
  console.log(el);
}

//example with string methods
for (let hero of heros) {
  console.log(hero.toUpperCase());
}

//array methods
let veggies = ["potato", "tomato", "brinjal", "carrot"];
console.log(veggies);
//->push()
veggies.push("beetroot");
console.log(veggies);
//->pop()
console.log(veggies.pop());
console.log(veggies);
//->toString()
console.log(veggies.toString());
//->concat():
let marvel = ["ironman", "spiderman", "thor"];
let dc = ["superman", "flash", "batman"];
let cheros = marvel.concat(dc);
console.log(cheros);
//->unshift
console.log(marvel);
marvel.unshift("antman");
console.log(marvel);
//->shift
console.log(marvel.shift());
console.log(marvel);
//->slice
console.log(cheros);
console.log(cheros.slice(1));
console.log(cheros.slice(3, 6));
//->splice\
console.log(cheros);
console.log(cheros.splice(2, 2, "haweye", "falcon")); //returns at that indeices
console.log(cheros); //return with new array
console.log(cheros.splice(2, 0, "thor", "superman")); //just to add at index
console.log(cheros);
console.log(cheros.splice(3, 1)); //just to delete at that index and returns
console.log(cheros);
console.log(cheros.splice(3, 1, "captian marvel")); //just to replace at index
console.log(cheros);
