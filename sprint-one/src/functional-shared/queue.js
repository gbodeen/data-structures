var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObject = {
    storage: {},
    front: 0,
    back: 0
  };
  Object.assign(queueObject, queueMethods);
  return queueObject;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.back] = value;
    this.back++;
    return this.size();
  },
  dequeue: function () {
    if (this.size() !== 0) {
      this.front++;
      return this.storage[this.front - 1];
    }
  },
  size: function () {
    return this.back - this.front;
  }
};



