let assertArraysEqual = (array1, array2) => {
  i = 0;
  for (let a of array1) {
    if (a !== array2[i]) {
      console.log("❌ The actual array does not equal to the expected array.");
      return false;
    }
    i++;
  }
  console.log("✅ The actual array is equal to the expected array.");
  return true;
};

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

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
