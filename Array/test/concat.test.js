const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

console.log(carr.concat(2));
console.log(carr.concat([2, 1]));
console.log(carr.concat([2, 2], [3, 4]));
console.log(carr.concat([2, 2], [3, 4], [[5, 6]]));
