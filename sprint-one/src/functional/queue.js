var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[position + length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if (length !== 0) {
      length--;
      position++;
      return storage[position - 1];
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
