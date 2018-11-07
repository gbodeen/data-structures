var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObject = Object.create(stackMethods);
  stackObject.counter = 0;
  return stackObject;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this[this.counter] = value;
  this.counter++;
  return this.counter;
};

stackMethods.pop = function () {
  if (this.counter !== 0) {
    this.counter--;
    return this[this.counter];
  }
};

stackMethods.size = function () {
  return this.counter;
};

