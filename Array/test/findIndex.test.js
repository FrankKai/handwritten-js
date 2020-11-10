const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

/**
 * 1.测试callback入参
 */
carr.findIndex((item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let findIndexArr = carr.findIndex((item) => item === 3);
console.log(findIndexArr);
