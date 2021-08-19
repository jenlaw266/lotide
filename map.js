const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  array1.forEach((item1, i) => {
    const item2 = array2[i];
    if (Array.isArray(item1)) {
      if (!eqArrays(item1, item2)) {
        return false;
      }
    }

    if (item1 !== item2) {
      return false;
    }
  });

  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log("✅ The actual array is equal to the expected array.");
  } else {
    console.log("❌ The actual array does not equal to the expected array.");
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testCase1 = map(testArray1, (num) => num + 1);
console.log(testCase1);
assertArraysEqual(testCase1, [2, 3, 4, 5, 6, 7, 8, 9, 10]);

const testArray2 = ["a string,", "hello there"];
const testCase2 = map(testArray2, (string) => string.split(" "));
console.log(testCase2);
assertArraysEqual(testCase2, [
  ["a", "string,"],
  ["hello", "there"],
]);

const testArray3 = [0, 1, 1, 0, 0];
const testCase3 = map(testArray3, (num) => Boolean(num));
console.log(testCase3);
assertArraysEqual(testCase3, [false, true, true, false, false]);
