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

const middle = (array) => {
  const isEven = (num) => {
    return num % 2 === 0;
  };

  let midPoint = Math.floor(array.length / 2);
  let midArray = [];
  if (array.length > 2) {
    isEven(array.length)
      ? midArray.push(array[midPoint - 1], array[midPoint])
      : midArray.push(array[midPoint]);
  }
  return midArray;
};

//middle([1]); // => []
//middle([1, 2]); // => []
//
//middle([1, 2, 3]); // => [2]
//middle([1, 2, 3, 4, 5]); // => [3]
//
//middle([1, 2, 3, 4]); // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
