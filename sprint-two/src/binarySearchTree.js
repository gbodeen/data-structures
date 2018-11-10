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

BSTMethods.depthFirstLog = function (cb, sortOrder = false) {
  if (!sortOrder) {
    cb(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (sortOrder) {
    cb(this.value);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BSTMethods.updateDepth = function () {

  let leftDepth = (this.left) ? this.left.depth : -1;
  let rightDepth = (this.right) ? this.right.depth : -1;

  if (Math.abs(leftDepth - rightDepth) >= 2) {
    this.rebalance();
    // we're on the wrong node now; still 18 instead of 17
    // the rebalancing properly connected 17 to 19
    // we need to do something else here, so that we don't re-set 18 as the left child of 19
    leftDepth = (this.left) ? this.left.depth : -1;
    rightDepth = (this.right) ? this.right.depth : -1;
  }

  this.depth = Math.max(leftDepth, rightDepth) + 1;
  if (this.parent) {
    this.parent.updateDepth();
  }
};

BSTMethods.rebalance = function () {

  var orderedNodes = [];
  var createNodeList = function (value) {
    orderedNodes.push(value);
  };
  this.depthFirstLog(createNodeList, true);
  //console.log(this.value, orderedNodes);

  //reconstitute section of tree and connect to larger tree in place of old section 
  var balancedTreeSeg;
  var createBalancedTree = function (arraySegment) {
    if (arraySegment.length) {

      var index = Math.floor(arraySegment.length / 2);

      if (!balancedTreeSeg) {
        balancedTreeSeg = BinarySearchTree(arraySegment[index]);
      } else {
        balancedTreeSeg.insert(arraySegment[index]);
      }

      createBalancedTree(arraySegment.slice(0, index));
      createBalancedTree(arraySegment.slice(index + 1));
    }
  };

  createBalancedTree(orderedNodes);

  // if (this.parent) {
  //   balancedTreeSeg.parent = this.parent;
  //   if (balancedTreeSeg.value > this.parent.value) {
  //     this.parent.right = balancedTreeSeg;
  //   } else {
  //     this.parent.left = balancedTreeSeg;
  //   }
  // } else { //when we are rebalancing up to the root Node
  this.value = balancedTreeSeg.value;
  this.depth = balancedTreeSeg.depth;
  this.left = balancedTreeSeg.left;
  this.right = balancedTreeSeg.right;
  this.left.parent = this;
  this.right.parent = this;

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
// console.log(foo);

