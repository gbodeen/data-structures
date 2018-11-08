var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
  return this.size();
};

Queue.prototype.dequeue = function () {
  if (this.size() !== 0) {
    this.front++;
    return this.storage[this.front - 1];
  }
};

Queue.prototype.size = function () {
  return this.back - this.front;
};
