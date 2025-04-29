export function heightChecker(heights: number[]): number {
  const heightsCopy = [...heights];
  heights.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != heightsCopy[i]) res++;
  }
  return res;
}
