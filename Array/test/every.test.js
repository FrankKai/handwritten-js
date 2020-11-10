const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

/**
 * 1.测试callback入参
 */
carr.every((item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let everyTruthy = carr.every((item) => item > 0);
let everyFalsy = carr.every((item) => item > 2);
console.log(everyTruthy, everyFalsy);
