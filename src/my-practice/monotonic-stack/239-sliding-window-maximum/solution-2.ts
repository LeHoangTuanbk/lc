export function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[i] >= nums[deque.at(-1)]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
