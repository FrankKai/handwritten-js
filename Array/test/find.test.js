const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

/**
 * 1.测试callback入参
 */
carr.find((item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let findArr = carr.find((item) => item > 1);
console.log(findArr);
