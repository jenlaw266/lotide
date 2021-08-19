let eqArrays = (actual, expected) => {
  return (
    actual.length === expected.length &&
    actual.every((element, i) => element === expected[i])
  );
};

let assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log("✅ The actual array is equal to the expected array.");
  } else {
    console.log("❌ The actual array does not equal to the expected array.");
  }
};

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
assertArraysEqual(letterPositions("hello there").e, [1, 7, 9]);
console.log(letterPositions("hello there"));
