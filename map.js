/**
 * map(arr, callback)
 * 遍历数组中的每一项，根据callback返回的结构，构造出一个新数组。
 * @param arr
 * @param callback(element[,index,[array]])
 */

const ArrayUtil = require("./array");

ArrayUtil.map = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

module.exports = ArrayUtil.map;
