export function generate(numRows: number): number[][] {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  let results: number[][] = new Array([1], [1, 1]);
  for (let i = 2; i <= numRows - 1; i++) {
    let currentRow: number[] = new Array(i + 1);
    currentRow[0] = 1;
    currentRow[i] = 1;
    for (let j = 1; j < i; j++) {
      currentRow[j] = results[i - 1][j - 1] + results[i - 1][j];
    }
    results.push(currentRow);
  }
  return results;
}
