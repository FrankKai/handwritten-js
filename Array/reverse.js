/**
 * reverse()
 * 翻转字符串
 */

function reverse(arr = this.array) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

module.exports = reverse;
