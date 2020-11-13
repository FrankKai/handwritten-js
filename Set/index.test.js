const CSet = require("./index");

const cSet = new CSet();

cSet.add(1);
cSet.add(2);
cSet.add(1);
console.log(cSet);
cSet.delete(2);
console.log(cSet);
console.log(cSet.has(1));
cSet.clear();
console.log(cSet);
