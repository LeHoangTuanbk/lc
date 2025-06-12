import { PriorityQueue } from '@datastructures-js/priority-queue';

class SmallestInfiniteSet2 {
  private minPQ: PriorityQueue<number>;
  private setNumber: Set<number>;
  constructor() {
    this.minPQ = new PriorityQueue((a, b) => a - b);
    this.setNumber = new Set();
    for (let i = 1; i < 10000; i++) {
      this.minPQ.enqueue(i);
      this.setNumber.add(i);
    }
  }

  popSmallest(): number {
    const temp = this.minPQ.dequeue();
    this.setNumber.delete(temp);
    return temp;
  }

  addBack(num: number): void {
    if (this.setNumber.has(num)) return;
    this.minPQ.enqueue(num);
    this.setNumber.add(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

class SmallestInfiniteSet {
  private currentMin: number;
  private addedBackSet: Set<number>;
  private minPQ: PriorityQueue<number>;

  constructor() {
    this.currentMin = 1;
    this.addedBackSet = new Set();
    this.minPQ = new PriorityQueue((a, b) => a - b);
  }

  popSmallest(): number {
    if (!this.minPQ.isEmpty()) {
      const val = this.minPQ.dequeue();
      this.addedBackSet.delete(val);
      return val;
    }
    return this.currentMin++;
  }

  addBack(num: number): void {
    if (num < this.currentMin && !this.addedBackSet.has(num)) {
      this.minPQ.enqueue(num);
      this.addedBackSet.add(num);
    }
  }
}

const smallestSet = new SmallestInfiniteSet();
console.log(smallestSet.popSmallest());
console.log(smallestSet.popSmallest());
console.log(smallestSet.popSmallest());
console.log(smallestSet.popSmallest());
