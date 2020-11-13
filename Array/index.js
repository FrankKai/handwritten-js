const concat = require("./concat");
const copyWithin = require("./copyWithin");
const every = require("./every");
const fill = require("./fill");
const filter = require("./filter");
const find = require("./find");
const findIndex = require("./findIndex");
const flat = require("./flat");
const flatMap = require("./flatMap");
const includes = require("./includes");
const indexOf = require("./indexOf");
const map = require("./map");
const reverse = require("./reverse");

function CArray(array = []) {
  this.array = array;
}
CArray.prototype.concat = concat;
CArray.prototype.copyWithin = copyWithin;
CArray.prototype.every = every;
CArray.prototype.fill = fill;
CArray.prototype.filter = filter;
CArray.prototype.find = find;
CArray.prototype.findIndex = findIndex;
CArray.prototype.flat = flat;
CArray.prototype.flatMap = flatMap;
CArray.prototype.includes = includes;
CArray.prototype.indexOf = indexOf;
CArray.prototype.map = map;
CArray.prototype.reverse = reverse;

module.exports = CArray;
