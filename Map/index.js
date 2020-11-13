function CMap(map = []) {
  this.map = map;
  this.size = this.map.length;
}

CMap.prototype.set = function (key, value) {
  const index = this.map.findIndex((item) => item.key === key);
  if (index === -1) {
    this.map.push({ key, value });
    this.size++;
  } else {
    this.map[index] = { key, value };
  }
};

CMap.prototype.get = function (key) {
  const item = this.map.find((item) => item.key === key);
  if (item) {
    return item.value;
  }
};

CMap.prototype.delete = function (key) {
  const index = this.map.findIndex((item) => item.key === key);
  if (index !== -1) {
    this.map.splice(index, 1);
    this.size--;
  }
};

CMap.prototype.has = function (key) {
  return this.map.findIndex((item) => item.key === key) !== -1;
};

CMap.prototype.clear = function () {
  this.map = [];
  this.size = 0;
};

module.exports = CMap;
