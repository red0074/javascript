let gameNum = 25;

let userNum = prompt("Guesss the number");
console.log(userNum);

while (gameNum != userNum) {
  userNum = prompt("wrong!!!!! guess the number again");
}
alert("user had win the game");
