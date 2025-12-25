export function maximalSquare(matrix: string[][]): number {
  const n = matrix.length,
    m = matrix[0].length;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  let maxK = 0;
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = 1;
      maxK = 1;
    }
  }
  for (let j = 0; j < m; j++) {
    if (matrix[0][j] === '1') {
      dp[0][j] = 1;
      maxK = 1;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] == '1')
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      maxK = Math.max(maxK, dp[i][j]);
    }
  }
  return maxK * maxK;
}
/* 
matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

*/
const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]; // 2
console.log(maximalSquare(matrix));
