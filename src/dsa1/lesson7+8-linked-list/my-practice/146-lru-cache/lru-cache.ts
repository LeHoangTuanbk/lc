class DoublyLinkedListNode {
  key: number;
  value: number;
  prev: DoublyLinkedListNode | null = null;
  next: DoublyLinkedListNode | null = null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

export class LRUCache {
  private capacity: number;
  private cache: Map<number, DoublyLinkedListNode>;
  private head: DoublyLinkedListNode | null;
  private tail: DoublyLinkedListNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, DoublyLinkedListNode>();
    this.head = null;
    this.tail = null;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key)!;
    this.moveToFront(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const existingNode = this.cache.get(key);
    if (existingNode) {
      existingNode.value = value;
      this.moveToFront(existingNode);
      return;
    }

    const newNode = new DoublyLinkedListNode(key, value);
    this.cache.set(key, newNode);
    this.addToFront(newNode);

    if (this.cache.size > this.capacity) {
      if (this.tail) {
        this.cache.delete(this.tail.key);
        this.removeNode(this.tail);
      }
    }
  }

  moveToFront(node: DoublyLinkedListNode) {
    this.removeNode(node);
    this.addToFront(node);
  }

  removeNode(node: DoublyLinkedListNode) {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  addToFront(node: DoublyLinkedListNode) {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }
}
