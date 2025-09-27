export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length,
    n = mat[0].length;
  let res: number[] = [];

  for (let d = 0; d < m + n - 1; d++) {
    const intermediate: number[] = [];

    let r = d < n ? 0 : d - n + 1;
    let c = d < n ? d : n - 1;

    while (r < m && c >= 0) {
      intermediate.push(mat[r][c]);
      r++;
      c--;
    }

    if (d % 2 === 0) {
      intermediate.reverse();
    }

    res.push(...intermediate);
  }
  return res;
}

/* 
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]


Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
*/
