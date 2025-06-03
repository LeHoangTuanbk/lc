import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
  ICompare,
  IGetCompareValue,
} from '@datastructures-js/priority-queue';

export function test() {
  let pq = new MinPriorityQueue<number>();
  pq.enqueue(3);
  pq.enqueue(5);
  pq.enqueue(1);
  console.log(pq.dequeue());
  console.log(pq.toArray());
}

test();
