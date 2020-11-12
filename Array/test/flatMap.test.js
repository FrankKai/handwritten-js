const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

let flatMapArr1 = carr.flatMap((num) => [num, num * 2]);
let flatMapArr2 = carr.flatMap((num) => [[num * 2]]);

console.log(flatMapArr1, flatMapArr2);
