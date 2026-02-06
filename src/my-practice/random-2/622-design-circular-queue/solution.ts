export class MyCircularQueue {
  private arr: number[];
  private head: number;
  private tail: number;
  private size: number;
  private capacity: number;
  constructor(k: number) {
    this.capacity = k;
    this.arr = Array(k);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.arr[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    const idx = (this.tail - 1 + this.capacity) % this.capacity;
    return this.arr[idx];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
