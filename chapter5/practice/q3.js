let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val * val);
});

//or
let calc = (val) => {
  console.log(val ** 2);
};
arr.forEach(calc);
