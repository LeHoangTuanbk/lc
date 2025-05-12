class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode;
  constructor() {
    this.head = new ListNode();
  }

  append(value: number) {
    const newNode = new ListNode(value);
    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  findNode(value: number): ListNode | null {
    let node = this.head.next;
    while (node != null) {
      if (node.val === value) return node;
      node = node.next;
    }
    return null;
  }

  deleteNode(delNode: ListNode) {
    let curNode = this.head.next;
    let preNode = this.head;
    while (curNode != delNode && curNode != null) {
      preNode = curNode;
      curNode = curNode.next;
    }
    if (curNode != null) {
      preNode.next = curNode.next;
    }
  }

  reverse() {
    let prev: ListNode | null = null,
      curr = this.head.next;
    while (curr != null) {
      const nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    this.head.next = prev;
    return this.head;
  }

  print() {
    const output: number[] = [];
    let node = this.head.next;
    while (node != null) {
      output.push(node.val);
      node = node.next;
    }
    console.log(output.join(' '));
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.print();
linkedList.reverse();
linkedList.print();

// const delNode = linkedList.findNode(5);
// if (delNode != null) {
//   console.log(delNode.val);
//   linkedList.deleteNode(delNode);
// }

// linkedList.print();
