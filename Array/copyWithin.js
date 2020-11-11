/**
 * copyWithin(target[,start[,end]])
 * 从start索引开始，到end索引结束(不包括end索引)，从target位置处开始向后替换
 * @param value
 * @param start
 * @param end
 */

function copyWithin(
  target,
  start = 0,
  end = this.array.length,
  arr = this.array
) {
  let i = target;
  let j = start;
  while (j < end) {
    arr[i++] = arr[j];
    j++;
  }
  return arr;
}

module.exports = copyWithin;
