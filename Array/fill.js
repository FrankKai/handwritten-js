/**
 * fill(value[,start[,end]])
 * 从start索引开始，到end索引结束，用value填充数组
 * @param value
 * @param start
 * @param end
 */

function fill(value, start = 0, end = this.array.length - 1, arr = this.array) {
  let i = start;
  let j = end;
  while (i < j) {
    arr[i] = value;
    arr[j] = value;
    i++;
    j--;
  }
  return arr;
}

module.exports = fill;
