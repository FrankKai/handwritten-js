const CArray = require("../index");

const carr = new CArray([1, 2, 3, 4]);

/**
 * 1.测试callback入参
 */
carr.map((item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let mapArr = carr.map((item, index) => ({ value: item, index }));
console.log(mapArr);