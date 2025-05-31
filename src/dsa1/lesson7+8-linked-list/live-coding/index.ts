function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return head;

  let cur: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

class LRUCache {
  private capacity: number;
  private cache: Map<number, DoublyLinkedListNode>;
  private head: DoublyLinkedListNode | null;
  private tail: DoublyLinkedListNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, DoublyLinkedListNode>();
    this.head = null; // Most recently used
    this.tail = null; // Least recently used
  }

  get(key: number): number {
    const node = this.cache.get(key);

    // Key doesn't exist
    if (!node) {
      return -1;
    }

    // Move to front (mark as recently used)
    this.moveToFront(node);

    return node.value;
  }

  put(key: number, value: number): void {
    // Check if key already exists
    const existingNode = this.cache.get(key);

    if (existingNode) {
      // Update value and move to front
      existingNode.value = value;
      this.moveToFront(existingNode);
      return;
    }

    // Create new node
    const newNode = new DoublyLinkedListNode(key, value);

    // Add to cache map
    this.cache.set(key, newNode);

    // Add to front of linked list
    this.addToFront(newNode);

    // Check if capacity exceeded
    if (this.cache.size > this.capacity) {
      // Remove least recently used (tail)
      if (this.tail) {
        // Remove from cache map
        this.cache.delete(this.tail.key);

        // Remove from linked list
        this.removeNode(this.tail);
      }
    }
  }

  private removeNode(node: DoublyLinkedListNode): void {
    // Handle prev pointer
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      // Node is the head
      this.head = node.next;
    }

    // Handle next pointer
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      // Node is the tail
      this.tail = node.prev;
    }
  }

  private addToFront(node: DoublyLinkedListNode): void {
    // Set node's pointers
    node.prev = null;
    node.next = this.head;

    // Update head's prev pointer if head exists
    if (this.head) {
      this.head.prev = node;
    }

    // Update head pointer
    this.head = node;

    // If this is the first node, set tail as well
    if (!this.tail) {
      this.tail = node;
    }
  }

  private moveToFront(node: DoublyLinkedListNode): void {
    this.removeNode(node);
    this.addToFront(node);
  }
}
