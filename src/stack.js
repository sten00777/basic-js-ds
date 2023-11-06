const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.head = null;
  }

  push(el) {
    let node = new Node(el)
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  pop() {
    let curr = this.head;
    this.head = this.head.next;
    return curr.value;
  }

  peek() {
    return this.head.value;
  }
}


module.exports = {
  Stack
};
