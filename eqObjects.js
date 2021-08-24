const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (!object1.hasOwnProperty(key)) {
        continue;
      }

      if (typeof object1[key] === "object" && object1[key] !== null) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else {
          if (
            Object.keys(object1[key]).length !==
            Object.keys(object2[key]).length
          ) {
            return false;
          }
          if (!eqObjects(object1[key], object2[key])) {
            return false;
          }
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

//test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
//
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
//
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
//
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 2 }, b: 2 })); // => false
//
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

module.exports = eqObjects;
