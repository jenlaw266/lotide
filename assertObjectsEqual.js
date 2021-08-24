const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion passed ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌ Assertion failed ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

//test code
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

module.exports = assertObjectsEqual;
