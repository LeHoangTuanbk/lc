export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const stack: number[] = [];
  const res: number[] = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));

/* 
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/
