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
