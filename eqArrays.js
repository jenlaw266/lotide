const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }
};

let eqArrays = (actual, expected) => {
  return (
    actual.length === expected.length &&
    actual.every((element, i) => element === expected[i])
  );
};

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//eqArrays([1, 2, 3], [3, 2, 1]); // => false
//
//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
//
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
