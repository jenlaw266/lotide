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

//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
//assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
