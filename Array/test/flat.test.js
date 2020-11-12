const CArray = require("../index");

const carr1 = new CArray([0, 1, 2, [3, 4]]);
const carr2 = new CArray([0, 1, 2, [[[3, 4]]]]);

console.log(carr1.flat());
console.log(carr1.flat(1));
console.log(carr2.flat(1));
console.log(carr2.flat(2));
console.log(carr2.flat(3));
console.log(carr2.flat(Infinity));
