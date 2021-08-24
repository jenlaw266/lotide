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
module.exports = without;
