import { PriorityQueue } from '@datastructures-js/priority-queue';

// 1005. Maximize Sum Of Array After K Negations
function largestSumAfterKNegations2(nums: number[], k: number): number {
  const minPQ = new PriorityQueue<number>((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    minPQ.enqueue(nums[i]);
  }
  for (let i = 0; i < k; i++) {
    const temp = minPQ.dequeue();
    minPQ.enqueue(-temp);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += minPQ.dequeue();
  }
  return res;
}

function largestSumAfterKNegations(nums: number[], k: number): number {
  const n = nums.length;
  for (let i = 0; i < n && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  nums.sort((a, b) => a - b);

  if (k % 2 == 1) {
    nums[0] = -nums[0];
  }

  return nums.reduce((acc, cur) => acc + cur);
}
