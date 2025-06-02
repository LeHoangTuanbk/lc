const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const BoardValue = {
  X: 'X',
  Empty: '.',
};

export function countBattleships(board: string[][]): number {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] || BoardValue.Empty === board[i][j]) {
        continue;
      }
      dfs(i, j, m, n, board, visited);
      res++;
    }
  }
  return res;
}

function dfs(x: number, y: number, m: number, n: number, board: string[][], visited: boolean[][]) {
  visited[x][y] = true;
  for (const [du, dv] of dirs) {
    const u = x + du,
      v = y + dv;
    if (!isInside(u, v, m, n) || visited[u][v] || BoardValue.Empty === board[u][v]) {
      continue;
    }
    dfs(u, v, m, n, board, visited);
  }
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

function countBattleships2(board: string[][]): number {
  const m = board.length;
  const n = board[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // above x = empty => head
      // left x = empty => head
      let isTopX: boolean = i > 0 && board[i - 1][j] === BoardValue.X;

      let isLeftX: boolean = j > 0 && board[i][j - 1] === BoardValue.X;

      if (!isTopX && !isLeftX) {
        count++;
      }
    }
  }
  return count;
}

function countBattleships3(board: string[][]): number {
  const m = board.length;
  const n = board[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == BoardValue.Empty) continue;

      // const isTopX = i > 0 && board[i - 1][j] === BoardValue.X;
      // const isLeftX = j > 0 && board[i][j - 1] === BoardValue.X;

      // if (!isTopX && !isLeftX) {
      //   count++;
      // }

      if (
        board[i][j] === BoardValue.X &&
        (i === 0 || board[i - 1][j] === BoardValue.Empty) &&
        (j === 0 || board[i][j - 1] === BoardValue.Empty)
      ) {
        count++;
      }
    }
  }

  return count;
}
