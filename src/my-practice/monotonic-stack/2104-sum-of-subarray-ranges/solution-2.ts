export function subArrayRanges(nums: number[]): number {
  const n = nums.length;

  const nextGreater = Array(n).fill(n);
  const prevGreater = Array(n).fill(-1);
  const nextSmaller = Array(n).fill(n);
  const prevSmaller = Array(n).fill(-1);

  let st1: number[] = [];
  let st2: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st1.length && nums[i] > nums[st1.at(-1)]) {
      st1.pop();
    }
    nextGreater[i] = st1.length === 0 ? n : st1.at(-1);
    st1.push(i);

    while (st2.length && nums[i] < nums[st2.at(-1)]) {
      st2.pop();
    }
    nextSmaller[i] = st2.length === 0 ? n : st2.at(-1);
    st2.push(i);
  }

  st1 = [];
  st2 = [];
  for (let i = 0; i < n; i++) {
    while (st1.length && nums[i] >= nums[st1.at(-1)]) {
      st1.pop();
    }
    prevGreater[i] = st1.length === 0 ? -1 : st1.at(-1);
    st1.push(i);

    while (st2.length && nums[i] <= nums[st2.at(-1)]) {
      st2.pop();
    }
    prevSmaller[i] = st2.length === 0 ? -1 : st2.at(-1);
    st2.push(i);
  }

  let maxSum = 0,
    minSum = 0;

  for (let i = 0; i < n; i++) {
    const maxCount = (i - prevGreater[i]) * (nextGreater[i] - i);
    const minCount = (i - prevSmaller[i]) * (nextSmaller[i] - i);

    maxSum += nums[i] * maxCount;
    minSum += nums[i] * minCount;
  }

  return maxSum - minSum;
}

const nums = [4, -2, -3, 4, 1];
console.log(subArrayRanges(nums));
