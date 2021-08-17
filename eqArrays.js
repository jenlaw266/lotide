const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }
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

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//eqArrays([1, 2, 3], [3, 2, 1]); // => false
//
//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
//
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
