var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function (item) {
  return this._storage.includes(item);
};

setPrototype.remove = function (item) {
  this._storage = this._storage.filter(elem => elem !== item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
