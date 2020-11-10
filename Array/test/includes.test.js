const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

console.log(carr.includes(2));
console.log(carr.includes(2, 1));
console.log(carr.includes(2, 2));
console.log(carr.includes(6));
console.log(carr.includes(2, 8));
