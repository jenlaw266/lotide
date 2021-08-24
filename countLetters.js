const countLetters = (string) => {
  let count = {};
  let noSpaces = string.split(" ").join("");
  let stringArray = noSpaces.split("");

  for (let letter of stringArray) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count;
};

//console.log(countLetters("this is a string"));

module.exports = countLetters;
