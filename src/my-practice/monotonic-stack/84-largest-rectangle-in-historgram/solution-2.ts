export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const leftBoundary: number[] = Array(n).fill(-1);
  const rightBoundary: number[] = Array(n).fill(n);

  let stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack.at(-1)] >= heights[i]) {
      stack.pop();
    }
    leftBoundary[i] = stack.length === 0 ? -1 : stack.at(-1);
    stack.push(i);
  }

  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack.at(-1)] >= heights[i]) {
      stack.pop();
    }
    rightBoundary[i] = stack.length === 0 ? n : stack.at(-1);
    stack.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    maxArea = Math.max(maxArea, heights[i] * (rightBoundary[i] - leftBoundary[i] - 1));
  }

  return maxArea;
}

const heights = [1, 1];
console.log(largestRectangleArea(heights));
