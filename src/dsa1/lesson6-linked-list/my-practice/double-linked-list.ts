export {};

class Node {
  value: number;
  next: Node | null = null;
  previous: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class DoubleLinkedList {
  head: Node | null = null;
  tail: Node | null = null;

  append(value: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  pushBack(value: number) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;

    this.tail = newNode;
  }

  find(value: number) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return null;
  }

  remove(value: number): boolean {
    const node = this.find(value);
    if (!node) return false;

    if (!node.previous) {
      this.head = node.next;
      return true;
    }
    if (!node.next) {
      this.tail = node.previous;
      return true;
    }

    node.previous.next = node.next;
    node.next.previous = node.previous;
    return true;
  }

  insertAfter(target: number, value: number): boolean {
    const node = this.find(target);
    if (!node) return false;
    const newNode = new Node(value);
    newNode.previous = node;
    newNode.next = node.next;

    if (!node.next) {
      node.next = newNode;
      return true;
    }

    node.next.previous = newNode;
    node.next = newNode;

    return true;
  }

  reverse() {
    let curr = this.head;
    while (curr) {
      const tempNode = curr.next;
      curr.next = curr.previous;
      curr.previous = tempNode;

      curr = tempNode;
    }
    const tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
  }

  printFromHead() {
    const values: number[] = [];
    let curr = this.head;
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    console.log(values.join(' '));
  }

  printFromTail() {
    const values: number[] = [];
    let curr = this.tail;
    while (curr) {
      values.push(curr.value);
      curr = curr.previous;
    }
    console.log(values.join(' '));
  }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append(1);
doubleLinkedList.pushBack(2);
doubleLinkedList.pushBack(3);
doubleLinkedList.append(0);
doubleLinkedList.append(-1);
doubleLinkedList.printFromHead();
doubleLinkedList.reverse();
doubleLinkedList.printFromHead();
