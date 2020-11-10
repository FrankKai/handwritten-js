/**
 * map(callback)
 * 遍历数组中的每一项，根据callback返回的结构，构造出一个新数组。
 * @param arr
 * @param callback(element[,index,[array]])
 */

function map(callback, arr = this.array) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

module.exports = map;
