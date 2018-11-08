

// Instantiate a new graph
var Graph = function () {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var k = 0; k < this.nodes[node].length; k++) {
    this.removeEdge(node, this.nodes[node][k]);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.nodes[fromNode] = this.nodes[fromNode].filter(x => x !== toNode);
  this.nodes[toNode] = this.nodes[toNode].filter(x => x !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
};
/*
var GraphNode = function (value) {
    this.value = value;
    this.edges = [];
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


