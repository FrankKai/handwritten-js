const filter = require("../filter");

let arr = [1, 2, 3, 4];

/**
 * 1.测试callback入参
 */
filter(arr, (item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let filterArr = filter(arr, (item) => item > 1);
console.log(filterArr);
