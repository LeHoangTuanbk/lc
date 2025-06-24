export function sumSubarrayMins2(arr: number[]): number {
  let res = 0;
  const n = arr.length;
  const minMonotonicStack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (minMonotonicStack.length && minMonotonicStack.at(-1) >= arr[i]) {
      minMonotonicStack.pop();
    }
    minMonotonicStack.push(arr[i]);
    for (let j = i; j < n; j++) {
      while (minMonotonicStack.length && minMonotonicStack.at(-1) >= arr[j]) {
        minMonotonicStack.pop();
      }
      minMonotonicStack.push(arr[j]);
      res += minMonotonicStack[0];
    }
  }
  return res;
}

function findMinValue(subArray: number[]) {
  let min = Infinity;
  for (const num of subArray) {
    min = Math.min(min, num);
  }
  return min;
}

export function sumSubarrayMins4(arr: number[]): number {
  let res = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      res += findMinValue(arr.slice(i, j + 1));
    }
  }
  return res % (10e9 + 7);
}

export function sumSubarrayMins5(arr: number[]): number {
  let res = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minValue = arr[i];
    for (let j = i; j < n; j++) {
      minValue = Math.min(arr[j], minValue);
      res += minValue;
    }
  }
  return res % (10e9 + 7);
}

export function sumSubarrayMins(arr: number[]): number {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack: number[] = [];

  const leftGreater: number[] = Array(n).fill(0);
  const rightGreater: number[] = Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack.at(-1)] > arr[i]) {
      stack.pop();
    }

    const prev = stack.length ? stack.at(-1) : -1;
    leftGreater[i] = i - prev;
    stack.push(i);
  }

  stack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) {
      stack.pop();
    }

    const next = stack.length ? stack.at(-1) : n;
    rightGreater[i] = next - i;
    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    res = (res + arr[i] * leftGreater[i] * rightGreater[i]) % MOD;
  }

  return res % MOD;
}

const arr = [3, 1, 2, 4],
  expectedOutput = 17;
console.log(sumSubarrayMins2(arr));
/* 
Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444



*/
