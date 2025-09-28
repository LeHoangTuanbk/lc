export function solveMatrixPuzzle(grid: number[][]) {
  const rows = grid.length;
  const cols = grid[0].length;
  const numBlocks = cols / 4;

  const blocks: { missing: number; data: number[][] }[] = [];

  for (let b = 0; b < numBlocks; b++) {
    const block: number[][] = Array.from({ length: 4 }, () => Array(4).fill(0));
    let sum = 0;
    let missingVal = -1;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const val = grid[i][b * 4 + j];
        block[i][j] = val;
        if (val !== -1) sum += val;
      }
    }
    missingVal = 136 - sum;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (block[i][j] === -1) block[i][j] = missingVal;
      }
    }
    blocks.push({ missing: missingVal, data: block });
  }

  blocks.sort((a, b) => a.missing - b.missing);

  const result: number[][] = Array.from({ length: 4 }, () => Array(cols).fill(0));
  for (let b = 0; b < numBlocks; b++) {
    const block = blocks[b].data;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result[i][b * 4 + j] = block[i][j];
      }
    }
  }
  return result;
}
