/**
 * arr.every(callback(element[,index,[array]]))
 * 数组中的所有项满足条件是返回true，有一项不满足即返回false
 * @param callback(element[,index,[array]])
 */

function every(callback, arr = this.array) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = every;
