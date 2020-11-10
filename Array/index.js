const every = require("./every");
const filter = require("./filter");
const find = require("./find");
const findIndex = require("./findIndex");
const includes = require("./includes");
const indexOf = require("./indexOf");
const map = require("./map");

function CArray(array) {
  this.array = array;
}

CArray.prototype.every = every;
CArray.prototype.filter = filter;
CArray.prototype.find = find;
CArray.prototype.findIndex = findIndex;
CArray.prototype.includes = includes;
CArray.prototype.indexOf = indexOf;
CArray.prototype.map = map;

module.exports = CArray;
