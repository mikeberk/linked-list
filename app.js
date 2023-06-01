class LinkedList {
  constructor() {
    this.head = null;
  }

  get size() {
    let nodeCount = 0;
    if (this.head == null) return nodeCount;
    else {
      let tmp = this.head;
      while (tmp != null) {
        nodeCount++;
        tmp = tmp.nextNode;
      }
      return nodeCount;
    }
  }

  get tail() {
    let tmp = this.head;
    if (tmp) {
      while (tmp.nextNode) {
        tmp = tmp.nextNode;
      }
    }
    return tmp;
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  at(index) {
    let currentNode = 0;
    let tmp = this.head;
    if (index < 0) return null;
    while (tmp != null || index >= currentNode) {
      if (index == currentNode) return tmp;
      tmp = tmp.nextNode;
      currentNode++;
    }
    return null;
  }

  pop() {
    if (this.head == null) return;
    else {
      let prev = this.head;
      let current = this.head.nextNode;
      if (!current) {
        this.head = null;
        return;
      }
      while (current.nextNode != null) {
        prev = current;
        current = current.nextNode;
      }
      prev.nextNode = null;
    }
  }

  contains(value) {
    if (this.head == null) return false;
    let tmp = this.head;
    while (tmp) {
      if (tmp.value == value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let nodeIndex = 0;
    if (this.head == null) return null;
    let tmp = this.head;
    while (tmp) {
      if (tmp.value == value) return nodeIndex;
      nodeIndex++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let returnString = "";
    if (this.head == null) return "null";
    let tmp = this.head;
    while (tmp) {
      returnString += ` ( ${tmp.value} ) ->`;
      tmp = tmp.nextNode;
    }
    returnString += " null";
    return returnString;
  }

  insertAt(value, index) {
    let nodeIndex = 1;
    if (this.head == null) {
      this.head = new Node(value);
    } else if (index == 0) {
      let tmp = this.head;
      this.head = new Node(value, tmp);
    } else if (!this.head.nextNode) {
      this.head.nextNode = new Node(value);
    } else {
      let prev = this.head;
      let next = this.head.nextNode;
      while (prev || nodeIndex <= index) {
        if (nodeIndex == index) {
          prev.nextNode = new Node(value, next);
          return;
        }
        if (next) next = next.nextNode;
        if (prev.nextNode) prev = prev.nextNode;
        nodeIndex++;
      }
      prev.nextNode = new Node(value);
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.nextNode = next;
  }
}
