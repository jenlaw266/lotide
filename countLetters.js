const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  let countLetters = {};
  let noSpaces = string.split(" ").join("");
  let stringArray = noSpaces.split("");

  for (let letter of stringArray) {
    if (countLetters[letter]) {
      countLetters[letter] += 1;
    } else {
      countLetters[letter] = 1;
    }
  }

  return countLetters;
};

//console.log(countLetters("this is a string"));
