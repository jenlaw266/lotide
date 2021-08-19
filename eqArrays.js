const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }
};

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

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//eqArrays([1, 2, 3], [3, 2, 1]); // => false
//
//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
//
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
