function CSet(collection = []) {
  this.collection = collection;
}

CSet.prototype.add = function (val) {
  if (!this.collection.includes(val)) {
    this.collection.push(val);
  }
};

CSet.prototype.delete = function (val) {
  const index = this.collection.indexOf(val);
  if (index !== -1) {
    this.collection.splice(index, 1);
  }
};

CSet.prototype.has = function (val) {
  return this.collection.includes(val);
};

CSet.prototype.clear = function () {
  this.collection = [];
};

module.exports = CSet;
