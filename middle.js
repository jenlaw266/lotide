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
 
module.exports = middle;