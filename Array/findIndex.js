/**
 * findIndex(callback)
 * 从头开始，查找符合callback断言条件的第一个元素的值，未找到时返回-1。
 * @param arr
 * @param callback(element[,index,[array]])
 */

function findIndex(callback, arr = this.array) {
  let i = 0;
  while (i < arr.length) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
    i++;
  }
  return -1;
}

module.exports = findIndex;
