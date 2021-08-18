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

let without = (array, remove) => {
  let i = 0;
  let newArray = array;
  for (let each of array) {
    for (let item of remove) {
      if (each === item) {
        newArray.splice(i, 1);
      }
    }
    i++;
  }
  return newArray;
};

//const without = (original, remove) => original.filter((item) => remove.indexOf(item) === -1);
