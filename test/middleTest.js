const middle = require("../middle");
const aAE = require("../assertArraysEqual");

aAE(middle([1]), []); // => []
aAE(middle([1, 2]), []); // => []
aAE(middle([1, 2, 3]), [2]); // => [2]
aAE(middle([1, 2, 3, 4, 5]), [3]); // => [3]
aAE(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
aAE(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
