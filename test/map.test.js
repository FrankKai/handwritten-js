const map = require("../map");

let arr = [1, 2, 3, 4];

/**
 * 1.测试callback入参
 */
map(arr, (item, index, arr) => console.log(item, index, arr));
/**
 * 2.测试callback断言
 */
let mapArr = map(arr, (item, index) => ({ value: item, index }));
console.log(mapArr);