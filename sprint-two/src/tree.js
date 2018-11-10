var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var createChild = Tree(value);
  this.children.push(createChild);
};

treeMethods.contains = function (target, found = false) {
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

treeMethods.bfsearch = function (target, thislevel = [this], nextlevel = []) { // Breadth-First Search
  if (thislevel.length === 0) { return false; }

  for (node of thislevel) {
    // console.log(node.value); // shows that the search is in the right order
    if (node.value === target) { return true; }
    nextlevel.push(...node.children);
  }

  return this.bfsearch(target, nextlevel, []);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// for testing bfsearch
// const foo = Tree('root');
// foo.addChild('firstChild');
// foo.addChild('secondChild');
// foo.children[0].addChild('grandchild1');
// foo.children[0].addChild('grandchild2');
// foo.children[1].addChild('grandchild3');
// foo.children[1].addChild('grandchild4');
// foo.children[0].children[0].addChild('greatGC1');
// foo.children[0].children[0].addChild('greatGC2');
// foo.children[0].children[1].addChild('greatGC3');
// foo.children[0].children[1].addChild('greatGC4');
// foo.children[1].children[0].addChild('greatGC5');
// foo.children[1].children[0].addChild('greatGC6');
// foo.children[1].children[1].addChild('greatGC7');
// foo.children[1].children[1].addChild('greatGC8');
// console.log(foo.bfsearch('no match'));
