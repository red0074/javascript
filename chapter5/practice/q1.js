function vowels(str) {
  count = 0;
  for (let ele of str) {
    if (
      ele === "a" ||
      ele === "e" ||
      ele === "i" ||
      ele === "o" ||
      ele === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(vowels("aeiou"));
