export function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let numOfLayers = Math.ceil(Math.min(rows, columns) / 2);
  let res: number[] = [];
  // console.log(numOfLayers);
  for (let i = 0; i < numOfLayers; i++) {
    //Upper edge
    for (let j = i; j < columns - i; j++) {
      res.push(matrix[i][j]);
    }
    //Right edge
    for (let k = i + 1; k < rows - i; k++) {
      res.push(matrix[k][columns - 1 - i]);
    }
    //Lower edge
    if (i < rows - 1 - i) {
      for (let m = columns - 1 - i - 1; m >= i; m--) {
        res.push(matrix[rows - 1 - i][m]);
      }
    }

    //Left edge
    if (i < columns - 1 - i) {
      for (let n = rows - 1 - i - 1; n > i; n--) {
        res.push(matrix[n][i]);
      }
    }
  }
  // console.log(res);
  return res;
}
