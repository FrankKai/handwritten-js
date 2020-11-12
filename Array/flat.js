/**
 * flat([depth])
 * 抹平数组，depth默认值为1
 * @param depth
 */

function flat(depth = 1, arr = this.array, recursiveResult) {
  let result = recursiveResult || [];
  let i = 0;
  while (i < arr.length) {
    if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
      if (depth > 1) {
        // 递归
        return flat(depth - 1, arr[i], result);
      } else {
        result = [...result, ...arr[i]];
      }
    } else {
      result = [...result, arr[i]];
    }
    i++;
  }
  return result;
}

module.exports = flat;
