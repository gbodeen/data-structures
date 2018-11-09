

var HashTable = function (limit = 8) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);
  this._tupleCount++;
  if (this._tupleCount > 0.75 * this._limit) {
    this.doubleSize();
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.delete(index, k);
  this._tupleCount--;
  if (this._tupleCount < 0.25 * this._limit) {
    // halveSize
  }
};

HashTable.prototype.doubleSize = function () {
  // Make a new storage object of LimitedArray
  // with double the limit
  this._limit *= 2;
  var newHashTable = new HashTable(this._limit);
  // var newStorage = LimitedArray(2 * this._limit);
  // run .each on old storage with callback to .insert it into new storage
  this._storage.each(function (tuple) {
    // this.insert.call(newStorage, key, elem);
    if (tuple !== undefined) {
      newHashTable.insert(tuple[0][0], tuple[0][1]);
    }
  });
  // then reassign storage names & delete old storage
  // this._storage = newStorage;
  this._storage = newHashTable._storage;
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



var foo = new HashTable();
foo.insert('a', 'alpha');
foo.insert('b', 'bravo');
foo.insert('c', 'charlie');
foo.insert('d', 'delta');
foo.insert('e', 'echo');
foo.insert('f', 'foxtrot');
console.log(foo);
foo.insert('g', 'golf');
console.log(foo);