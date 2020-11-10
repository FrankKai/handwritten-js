/**
 * includes(arr, searchElement, beginIndex)
 * 从beginIndex索引开始，查找当前数组是否包含searchElement
 * @param arr
 * @param searchElement
 * @param fromIndex
 */

function includes(searchElement, fromIndex = 0, arr = this.array) {
  let i = fromIndex;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === searchElement || arr[j] === searchElement) {
      return true;
    }
    i++;
    j--;
  }
  return false;
}

module.exports = includes;
