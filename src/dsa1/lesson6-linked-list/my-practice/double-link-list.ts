/*
- Double linkList: print xuoi, nguoc, 
- Find, Insertion, Remove
*/
export {};
class Node {
  value: number | null;
  next: Node | null;
  previous: Node | null;
  constructor(value?: number) {
    this.value = value ?? null;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  head: Node;
  tail: Node;
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  append(value: number) {
    const newNode = new Node(value);

    newNode.next = this.head.next;
    this.head.next!.previous = newNode;

    this.head.next = newNode;
    newNode.previous = this.head;
  }

  pushBack(value: number) {
    const newNode = new Node(value);

    newNode.previous = this.tail.previous;
    this.tail.previous!.next = newNode;

    this.tail.previous = newNode;
    newNode.next = this.tail;
  }

  printFromHead() {
    const values: number[] = [];
    let curr = this.head.next;
    while (curr !== this.tail) {
      if (curr?.value != null) values.push(curr.value);
      curr = curr!.next;
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
