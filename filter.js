/**
 * filter(arr, callback)
 * 测试数组中的每一项，验证为true时保留元素，false时舍弃。
 * @param arr
 * @param callback(element[,index,[array]])
 */

const ArrayUtil = require("./array");

ArrayUtil.filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const validate = callback.call(this, arr[i], i, arr);
    if (validate) {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = ArrayUtil.filter;