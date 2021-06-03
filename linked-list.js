/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error('The linked list is empty - cannot pop')
    }
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;  

  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid Index - out of bounds of linked list.')
    }
    let currentNode = this.head;
    let counter = 0;
    while (idx !== counter) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let foundNode = this.getAt(idx);
    if (foundNode) {
      foundNode.val = val;
    }
    throw new Error('Invalid Index - out of bounds of linked list')
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if (idx < 0 || idx > this.length) {
      throw new Error('This index is invalid')
    }
    if (idx === this.length) {
      this.push(newNode);
    }
    if (idx === 0) {
      this.unshift(newNode);
    }
    let prev = this.getAt(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index - out of bounds')
    }
    if (idx === this.length -1) {
      return this.pop(idx);
    }
    if (idx === 0) {
      return this.shift(idx);
    }
    let prevNode = this.getAt(idx - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length -= 1;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
      counter += currentNode.val;
      currentNode = currentNode.next;
    }
    return counter / this.length;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  find(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return true;
    }
    return false;
  }
}

module.exports = LinkedList;
