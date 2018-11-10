

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
    this.changeSize(2);
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
    this.changeSize(0.5);
  }
};

HashTable.prototype.changeSize = function (multiplier) {

  this._limit *= multiplier;
  var newHashTable = new HashTable(this._limit);

  this._storage.each(function (tuple) {

    if (tuple !== undefined) {
      newHashTable.insert(tuple[0], tuple[1]);
    }
  });
  this._storage = newHashTable._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



// var foo = new HashTable();
// foo.insert('a', 'alpha');
// foo.insert('b', 'bravo');
// foo.insert('c', 'charlie');
// foo.insert('d', 'delta');
// foo.insert('e', 'echo');
// foo.insert('f', 'foxtrot');
// console.log(foo);
// foo.insert('g', 'golf');
// console.log(foo);