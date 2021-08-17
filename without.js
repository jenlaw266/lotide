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

//without([1, 2, 3], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));
//
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
//// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
