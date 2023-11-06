const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
     addData(this.head);
    }
    function addData(currentNode) {
       if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = node;
        } else {
         addData(currentNode.left);
        }
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = node;
        } else {
         addData(currentNode.right);
        }
      }
    }
  }

  root() {
    return this.head;
  }

  has(data) {
    function checkValue(current) {
      if (data === current.data) return true;
      if (data > current.data) {
        if (current.right) {
          return checkValue(current.right);
        } else {return false;}
      } else if (data < current.data){
        if (current.left) {
        return checkValue(current.left);
        } else {return false;}
      } else {return false;}
    }
    return checkValue(this.head);
  }

  find(data) {
    function checkValue(current) {
      if (data === current.data) return current;
      if (data > current.data) {
        if (current.right) {
          return checkValue(current.right);
        } else {return null;}
      } else if (data < current.data){
        if (current.left) {
        return checkValue(current.left);
        } else {return null;}
      } else {return null;}
    }
    return checkValue(this.head);
  }

  remove(data) {
    this.head = removeTree(this.head);

    function removeTree (curr) {
      if (!curr) return null;
      if (data < curr.data) {
        curr.left = removeTree(curr.left);
        return curr;
      } else if (data > curr.data) {
        curr.right = removeTree(curr.right);
        return curr;
      } else {
        if (!curr.left && !curr.right) {
          return null;
        } else if (curr.left && !curr.right) {
          return curr.left;
        } else if (!curr.left && curr.right) {
          return curr.right;
        } else {
          let minOfRemoved = curr.left;
          let rightNode = curr.right;
          curr = rightNode;
          while (rightNode.left !== null) {
            rightNode = rightNode.left;
          }
          rightNode.left = minOfRemoved;
          curr.right = rightNode;
          return curr;
        }
      }
    }
  }

  min() {
    function checkValue(current) {
      if (current.left) {
        return checkValue(current.left);
      }
      return current.data;
    }
    return checkValue(this.head);
  }

  max() {
    function checkValue(current) {
      if (current.right) {
        return checkValue(current.right);
      }
      return current.data;
    }
    return checkValue(this.head);
  }
}

module.exports = {
  BinarySearchTree
};