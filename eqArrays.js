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

module.exports = eqArrays;