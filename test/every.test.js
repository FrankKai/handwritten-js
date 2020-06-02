const every = require("../every");

const arr = [1, 2, 3, 4];

/**
 * 1.测试callback入参
 */
every(arr, (item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let everyTruthy = every(arr, (item) => item > 0);
let everyFalsy = every(arr, (item) => item > 2);
console.log(everyTruthy, everyFalsy);
