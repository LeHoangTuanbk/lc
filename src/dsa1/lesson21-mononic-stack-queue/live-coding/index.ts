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

/* 
if (
  maxd.length && mind.length &&
  Math.abs(nums[j + 1] - nums[mind[0]]) > limit &&
  Math.abs(nums[j + 1] - nums[maxd[0]]) > limit
)

*/
function longestSubarray(nums: number[], limit: number): number {
  const n = nums.length;
  const mind: number[] = [];
  const maxd: number[] = [];
  let res = 0;
  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n) {
      if (nums[j + 1] - nums[mind[0]] > limit) {
        break;
      }
      if (maxd.length && nums[maxd[0]] - nums[j + 1] > limit) {
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

function longestSubarray3(nums: number[], limit: number): number {
  const n = nums.length;
  const mind: number[] = [];
  const maxd: number[] = [];
  let res = 0;
  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n) {
      const next = j + 1;
      const maxVal = maxd.length ? Math.max(nums[next], nums[maxd[0]]) : nums[next];
      const minVal = mind.length ? Math.min(nums[next], nums[mind[0]]) : nums[next];

      if (maxVal - minVal > limit) break;

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

    if (mind.length && mind[0] === i) mind.shift();
    if (maxd.length && maxd[0] === i) maxd.shift();
  }
  return res;
}

export function longestSubarray2(nums: number[], limit: number): number {
  const maxDeque: number[] = [];
  const minDeque: number[] = [];
  let left = 0;
  let res = 0;

  for (let right = 0; right < nums.length; right++) {
    while (maxDeque.length && nums[right] > maxDeque[maxDeque.length - 1]) {
      maxDeque.pop();
    }
    maxDeque.push(nums[right]);

    while (minDeque.length && nums[right] < minDeque[minDeque.length - 1]) {
      minDeque.pop();
    }
    minDeque.push(nums[right]);

    while (maxDeque[0] - minDeque[0] > limit) {
      if (maxDeque[0] === nums[left]) maxDeque.shift();
      if (minDeque[0] === nums[left]) minDeque.shift();
      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
}

export function removeDuplicateLetters(s: string): string {
  const stack: string[] = [];
  const used = new Set<string>();
  const lastCount: Record<string, number> = {};

  for (const ch of s) {
    lastCount[ch] = (lastCount[ch] ?? 0) + 1;
  }

  for (const ch of s) {
    lastCount[ch]--;

    if (used.has(ch)) continue;

    while (stack.length && stack[stack.length - 1] > ch && lastCount[stack[stack.length - 1]] > 0) {
      used.delete(stack.pop()!);
    }

    stack.push(ch);
    used.add(ch);
  }

  return stack.join('');
}

export class StockSpanner {
  private stack: [number, number][] = [];

  next(price: number): number {
    let span = 1;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      const [, prevSpan] = this.stack.pop()!;
      span += prevSpan;
    }

    this.stack.push([price, span]);
    return span;
  }
}

export function maxResult(nums: number[], k: number): number {
  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  const dq: number[] = [0]; // store indices of dp[], decreasing order

  for (let i = 1; i < n; i++) {
    // Remove out-of-window indices
    while (dq.length && dq[0] < i - k) dq.shift();

    dp[i] = dp[dq[0]] + nums[i];

    // Maintain deque decreasing by dp value
    while (dq.length && dp[i] >= dp[dq[dq.length - 1]]) {
      dq.pop();
    }

    dq.push(i);
  }

  return dp[n - 1];
}
