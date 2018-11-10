/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function (limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function (index, key) {
    checkLimit(index);
    if (storage[index] !== undefined) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
  limitedArray.set = function (index, value, key) {
    checkLimit(index);
    if (storage[index] === undefined) {
      storage[index] = [];
    }
    let tracker = false;
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i][1] = value;
        tracker = true;
      }
    }
    if (!tracker) {
      storage[index].push([key, value]);
    }
  };
  limitedArray.each = function (callback) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i] !== undefined) {
        for (let j = 0; j < storage[i].length; j++) {
          callback(storage[i][j], i, storage);
        }
      }
    }
  };
  limitedArray.delete = function (index, key) {
    //storage.splice(index, 1);
    for (let i = 0; storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index].splice(i, 1);
      }
    }
  };

  var checkLimit = function (index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
