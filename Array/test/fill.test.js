const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

console.log(carr.fill(9));
console.log(carr.fill(8, 1, 2));
