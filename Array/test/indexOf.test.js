const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

console.log(carr.indexOf(2));
console.log(carr.indexOf(2, 1));
console.log(carr.indexOf(2, 2));
console.log(carr.indexOf(6));
console.log(carr.indexOf(4));
console.log(carr.indexOf(2, 8));
