export function subArrayRanges(nums: number[]): number {
  const n = nums.length;

  const nextGreater = Array(n).fill(n);
  const prevGreater = Array(n).fill(-1);
  const nextSmaller = Array(n).fill(n);
  const prevSmaller = Array(n).fill(-1);

  let st: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && nums[i] > nums[st.at(-1)]) {
      st.pop();
    }
    nextGreater[i] = st.length === 0 ? n : st.at(-1);
    st.push(i);
  }

  st = [];
  for (let i = 0; i < n; i++) {
    while (st.length && nums[i] >= nums[st.at(-1)]) {
      st.pop();
    }
    prevGreater[i] = st.length === 0 ? -1 : st.at(-1);
    st.push(i);
  }

  st = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && nums[i] < nums[st.at(-1)]) {
      st.pop();
    }
    nextSmaller[i] = st.length === 0 ? n : st.at(-1);
    st.push(i);
  }

  st = [];
  for (let i = 0; i < n; i++) {
    while (st.length && nums[i] <= nums[st.at(-1)]) {
      st.pop();
    }
    prevSmaller[i] = st.length === 0 ? -1 : st.at(-1);
    st.push(i);
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
