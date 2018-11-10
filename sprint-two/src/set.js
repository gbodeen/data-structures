var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage.insert(this.objToKey(item), item);
  // if (!this.contains(item)) {
  //   this._storage.push(item);
  // }
};

setPrototype.contains = function (item) {
  return this._storage.retrieve(this.objToKey(item)) !== undefined;
  // return this._storage.includes(item);
};

setPrototype.remove = function (item) {
  this._storage.remove(this.objToKey(item));
  // this._storage = this._storage.filter(elem => elem !== item);
};

setPrototype.objToKey = function (item) {
  if (typeof item === 'function') {
    return item.toString();
  } else {
    return JSON.stringify(item);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
