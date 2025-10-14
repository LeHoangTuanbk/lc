export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  heights.push(0);

  const stack: number[] = [];

  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];

    while (stack.length > 0 && currentHeight < heights[stack.at(-1)]) {
      const topIndex = stack.pop();
      const height = heights[topIndex];

      const leftBoundary = stack.length === 0 ? -1 : stack.at(-1);
      const width = i - leftBoundary - 1;

      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
    stack.push(i);
  }

  return maxArea;
}

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
