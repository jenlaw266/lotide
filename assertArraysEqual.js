let eqArrays = (array1, array2) => {
  i = 0;
  for (let a of array1) {
    if (a !== array2[i]) {
      return false;
    }
    i++;
  }
  return true;
};

let assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("✅ The actual array is equal to the expected array.");
  } else {
    console.log("❌ The actual array does not equal to the expected array.");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
