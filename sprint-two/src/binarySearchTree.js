var BinarySearchTree = function (value) {
  var newBST = {};

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  newBST.parent = null;
  newBST.depth = 0;

  Object.assign(newBST, BSTMethods);

  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
      this.left.parent = this;
      this.left.updateDepth();
    }
  } else if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
      this.right.parent = this;
      this.right.updateDepth();
    }
  }
};

BSTMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

BSTMethods.depthFirstLog = function (cb) {
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BSTMethods.updateDepth = function () {

  let leftDepth = (this.left) ? this.left.depth : -1;
  let rightDepth = (this.right) ? this.right.depth : -1;

  if (Math.abs(leftDepth - rightDepth) >= 2) {
    this.rebalance();
  }

  this.depth = (leftDepth > rightDepth) ? leftDepth + 1 : rightDepth + 1;
  if (this.parent) {
    this.parent.updateDepth();
  }
};

BSTMethods.rebalance = function () {

  var orderedNodes = [];
  var createNodeList = function (value) {
    orderedNodes.push(value);
  };
  this.depthFirstLog(createNodeList);
  //console.log(this.value, orderedNodes);

  //reconstitute section of tree and connect to larger tree in place of old section 
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

var foo = BinarySearchTree(20);
foo.insert(19);
foo.insert(18);
foo.insert(17);
foo.insert(16);
foo.insert(35);
foo.insert(17.5);
foo.insert(45);
foo.insert(44.99);
console.log(foo.depth);

