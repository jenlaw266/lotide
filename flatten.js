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

const flatten = (inputArray) => {
  let flatArray = [];
  for (let element of inputArray) {
    if (!Array.isArray(element)) {
      flatArray.push(element);
    } else {
      for (let item of element) {
        flatArray.push(item);
      }
    }
  }
  return flatArray;
};

//const flatten = (inputArray) => (inputArray.flat(1));
//console.log(flatten([1, 2, [3, 4], 5, [6]]));
