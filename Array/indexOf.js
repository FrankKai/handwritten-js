/**
 * indexOf(searchElement[,fromIndex])
 * 从fromIndex索引开始，查找当前数组searchElement的索引，若找到返回索引，否则返回-1
 * @param arr
 * @param searchElement
 * @param fromIndex
 */

function indexOf(searchElement, fromIndex = 0, arr = this.array) {
  let i = fromIndex;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === searchElement) {
      return i;
    }
    if (arr[j] === searchElement) {
      return j;
    }
    i++;
    j--;
  }
  return -1;
}

module.exports = indexOf;
