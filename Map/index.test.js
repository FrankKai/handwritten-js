const CMap = require("./index");

const cMap = new CMap();

cMap.set("foo", 1);
cMap.set("bar", 2);
console.log(cMap);
cMap.set("foo", 3);
console.log(cMap);
cMap.delete("bar");
console.log(cMap);
console.log(cMap.get("bar"));
console.log(cMap.get("foo"));
console.log(cMap.has("bar"));
console.log(cMap.has("foo"));
cMap.clear();
console.log(cMap);
