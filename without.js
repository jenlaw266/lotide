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
