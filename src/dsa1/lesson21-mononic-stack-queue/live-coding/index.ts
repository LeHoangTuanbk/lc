export function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  nums.concat(nums);
  const stack: number[] = Array(n);
  const res: number[] = Array(n);
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    if (i < n) {
      res[i] = stack.length ? nums[stack[stack.length - 1]] : -1;
    }
    stack.push(i);
  }

  return res;
}

function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];
  const res: string;
  for (let c of num) {
    while (res.length && res[res.length - 1] && k > 0) {
      res.pop();
      k--;
    }
    res += c;
  }

  if (k >= res.length) {
    return '0';
  }

  let start = 0;
  while (start + 1 < res.length && res[start] == '0') {
    start++;
  }
  return res.substring(start);
}

/* 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

*/

function removeKdigits2(num: string, k: number): string {
  const n = num.length;
  const d: number[] = [];
  let res: string;
  for (let i = 0, j = 0; i < n - k; i++) {
    while (j <= i + k) {
      while (d.length && num[d[d.length - 1]] > num[j]) {
        d.pop();
      }
      d.push(j);
      j++;
    }
    res += num[d[0]];
    d.shift();
  }

  if (k >= res.length) {
    return '0';
  }

  let start = 0;
  while (start + 1 < res.length && res[start] == '0') {
    start++;
  }
  return res.substring(start);
}

function longestSubarray(nums: number[], limit: number): number {
  const n = nums.length;
  const mind: number[] = [];
  const maxd: number[] = [];
  let res = 0;
  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n) {
      if (nums[j + 1 - nums[mind[0]]] > limit) {
        break;
      }
      if (maxd.length && nums[maxd[0] - nums[j + 1]] > limit) {
        break;
      }
      j++;
      while (mind.length && nums[mind[mind.length - 1]] >= nums[j]) {
        mind.pop();
      }
      mind.push(j);
      while (maxd.length && nums[maxd[maxd.length - 1]] <= nums[j]) {
        maxd.pop();
      }
      maxd.push(j);
    }

    res = Math.max(res, j - i + 1);

    if (mind[0] == i) {
      mind.shift();
    }

    if (maxd[0] == i) {
      maxd.shift();
    }
  }
  return res;
}
