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
