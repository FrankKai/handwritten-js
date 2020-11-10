/**
 * find(arr, callback)
 * 从头开始，查找符合callback断言条件的第一个元素的值，未找到时返回undefined。
 * @param arr
 * @param callback(element[,index,[array]])
 */

function find(callback, arr = this.array) {
  let i = 0;
  while (i < arr.length) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
    i++;
  }
}

module.exports = find;
