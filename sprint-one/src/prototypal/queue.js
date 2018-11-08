var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObject = Object.create(queueMethods);
  queueObject.front = 0;
  queueObject.back = 0;
  return queueObject;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.back] = value;
    this.back++;
  },
  
  dequeue: function() {
    if (this.size() !== 0) {
      this.front++;
      return this[this.front - 1];
    }
  },
  
  size: function() {
    return this.back - this.front;
  }
};


