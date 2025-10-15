export function maximalRectangle(matrix: string[][]): number {
  const m = matrix.length,
    n = matrix[0].length;
  if (m === 0 || n === 0) return 0;

  const heights = new Array(n).fill(0);
  let maxArea = 0;

  const getMaxArea = (heights: number[]): number => {
    const st: number[] = [];
    const extended = [...heights, 0];
    let max = 0;

    for (let i = 0; i < extended.length; i++) {
      while (st.length > 0 && extended[i] < extended[st.at(-1)]) {
        const h = extended[st.pop()];
        const width = st.length === 0 ? i : i - st.at(-1) - 1;
        max = Math.max(max, h * width);
      }
      st.push(i);
    }

    return max;
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      heights[col] = matrix[row][col] === '1' ? heights[col] + 1 : 0;
    }
    maxArea = Math.max(maxArea, getMaxArea(heights));
  }

  return maxArea;
}
