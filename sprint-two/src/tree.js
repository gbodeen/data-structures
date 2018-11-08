var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var createChild = Tree(value);
  this.children.push(createChild);
};

treeMethods.contains = function(target, found = false) {
  // loop through, check the children to see if the target value is found
  // if the target is not found, recursively search children
  if (this.value === target) {
    found = true;
  }
  for (let i = 0; i < this.children.length; i++) {
    found = this.children[i].contains(target, found);
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
