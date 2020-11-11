/**
 * concat(value[,value1[,value2[,...valueN]]])
 * 拼接数组，可以一次拼接一个，也可以拼接多个
 * @param value
 * @param value1
 * ...
 * @param valueN
 */

function concat() {
  const values = [...arguments];
  let result = [...this.array];
  let i = 0;
  while (i < values.length) {
    if (Object.prototype.toString.call(values[i]) === "[object Array]") {
      result = [...result, ...values[i]];
    } else {
      result = [...result, values[i]];
    }
    i++
  }
  return result;
}

module.exports = concat;
