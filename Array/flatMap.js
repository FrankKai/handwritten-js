/**
 * flatMap(callback)
 * 抹平数组一次后返回结果，相当于flat(1)+map
 * @param arr
 * @param callback(element[,index,[array]])
 */

function flatMap(callback, arr = this.array) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result = [...result, ...callback(arr[i], i, arr)];
    i++;
  }
  return result;
}

module.exports = flatMap;
