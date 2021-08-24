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

module.exports = flatten;
