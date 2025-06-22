function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const res: number[] = Array(n).fill(0);
  const mononicStack: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      mononicStack.length &&
      temperatures[i] >= temperatures[mononicStack[mononicStack.length - 1]]
    ) {
      mononicStack.pop();
    }
    if (mononicStack.length) {
      res[i] = mononicStack[mononicStack.length - 1] - i;
    }
    mononicStack.push(i);
  }
  return res;
}

/* 
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]



*/

export function dailyTemperatures2(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack: number[] = []; // stack of indices

  for (let i = n - 1; i >= 0; i--) {
    // Loại bỏ những ngày sau không nóng hơn hiện tại
    while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return result;
}
