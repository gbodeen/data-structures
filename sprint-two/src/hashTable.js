

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);
  this._tupleCount++;
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.delete(index, k);
  this._tupleCount--;
};

HashTable.prototype.doubleSize = function () {
  // Make a new storage object of LimitedArray
  // with double the limit
};

HashTable.prototype.halveSize = function () {
  // Make a new storage object of LimitedArray
  // with half the limit
};

HashTable.prototype.transferTuples = function () {
  // retrieve every tuple from origin array
  // insert them into the destination array
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


