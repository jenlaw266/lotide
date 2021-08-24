const letterPositions = function (sentence) {
  const results = {};

  const noSpaces = sentence.split(" ").join("");
  const letterArray = noSpaces.split("");

  for (let i = 0; i < letterArray.length; i++) {
    let letter = letterArray[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  return results;
};

//test code
// assertArraysEqual(letterPositions("hello there").e, [1, 7, 9]);
// console.log(letterPositions("hello there"));

module.exports = letterPositions;
