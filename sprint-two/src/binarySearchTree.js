var BinarySearchTree = function (value) {
    var newBST = {};
    newBST.value = value;
    newBST.left = null;
    newBST.right = null;
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
        }
    } else if (value > this.value) {
        if (this.right) {
            this.right.insert(value);
        } else {
            this.right = BinarySearchTree(value);
        }
    }
};

BSTMethods.contains = function (value) {

    //base case 
    if (this.value === value) {
        return true;
    }
    //return (!!this.left && this.left.contains(value)) ||
    //   (!!this.right && this.right.contains(value));

    if (value < this.value && this.left) {
        return this.left.contains(value);
    }
    if (value > this.value && this.right) {
        return this.right.contains(value);
    }
    return false;

};

BSTMethods.depthFirstLog = function (cb) {
    cb(this.value);
    if (this.left) {
        this.left.depthFirstLog(cb);
    }
    if (this.right) {
        this.right.depthFirstLog(cb);
    }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
