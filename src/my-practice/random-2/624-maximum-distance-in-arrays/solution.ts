import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

type Point = {
  i: number;
  val: number;
};
export function maxDistance(arrays: number[][]): number {
  const minPQ = new MinPriorityQueue<Point>((item) => item.val);
  const maxPQ = new MaxPriorityQueue<Point>((item) => item.val);

  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    minPQ.push({ i, val: arr[0] });
    maxPQ.push({ i, val: arr.at(-1) });
  }

  const maxVal = maxPQ.pop();
  const minVal = minPQ.pop();

  if (maxVal.i !== minVal.i) return maxVal.val - minVal.val;

  // max1
  let min = minPQ.dequeue();
  while (min.i === maxVal.i) {
    min = minPQ.dequeue();
  }
  const max1 = maxVal.val - min.val;

  // max2
  let max = maxPQ.dequeue();
  while (max.i === minVal.i) {
    max = maxPQ.dequeue();
  }
  const max2 = max.val - minVal.val;

  return Math.max(max1, max2);
}

const arrays = [[1], [2]];
console.log(maxDistance(arrays));
