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
