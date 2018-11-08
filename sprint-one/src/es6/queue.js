class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.size() !== 0) {
      this.front++;
      return this.storage[this.front - 1];
    }
  }

  size() {
    return this.back - this.front;
  }

}
