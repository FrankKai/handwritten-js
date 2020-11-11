const CArray = require("../index");

const carr = new CArray(['a', 'b', 'c', 'd', 'e']);

console.log(carr.copyWithin(0, 3, 4));
console.log(carr.copyWithin(1, 3));
