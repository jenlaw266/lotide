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

const takeUntil = function (array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item)) {
      return newArray;
    }
    newArray.push(item);
  }
  return newArray;
};

//test data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
