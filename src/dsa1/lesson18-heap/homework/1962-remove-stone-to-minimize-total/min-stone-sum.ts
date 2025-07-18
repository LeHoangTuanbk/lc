import { PriorityQueue } from '@datastructures-js/priority-queue';

export function minStoneSum(piles: number[], k: number): number {
  const maxPQ = new PriorityQueue<number>((a, b) => b - a);
  for (const pile of piles) {
    maxPQ.enqueue(pile);
  }

  for (let i = 0; i < k; i++) {
    let temp = maxPQ.dequeue();
    temp -= Math.floor(temp / 2);
    maxPQ.enqueue(temp);
  }
  console.log(maxPQ.toArray());

  return maxPQ.toArray().reduce((pre, cur) => pre + cur, 0);
}

const piles = [5, 4, 9],
  k = 2;
console.log(minStoneSum(piles, k));

/* 
[5,4,,4]
2,4,4


You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:

Choose any piles[i] and remove ceil(piles[i] / 2) stones from it.
Notice that you can apply the operation on the same pile more than once.

Return the minimum possible total number of stones remaining after applying the k operations.

ceil(x) is the smallest integer that is greater than or equal to x (i.e., rounds x up).

 

Example 1:

Input: piles = [5,4,9], k = 2
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12.
Example 2:

Input: piles = [4,3,6,7], k = 3
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [4,3,3,7].
- Apply the operation on pile 3. The resulting piles are [4,3,3,4].
- Apply the operation on pile 0. The resulting piles are [2,3,3,4].
The total number of stones in [2,3,3,4] is 12.

*/
