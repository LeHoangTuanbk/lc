function solveNQueens(n: number): string[][] {
  const board: string[][] = [];
  for(
    // fill ....
  )

  dfs(0, n, res)
  return res;

  function dfs(c: number, n: number, board: string[][]) {
    if(c >= n) {
      //res.add()

    }

    for(let i = 0; i < n; i++) {
      if(!canPlace(i, c, n, board)) {
        continue;
      }
      board[i][c] = "Q";
      dfs(c + 1, n, board);
      board[i][c] = "."
    }
  }

  function canPlace(x: number, y: number, n: number, board: string[][]) {
    // Go thru row
    for(let i = 0; i< n; i++) {
      if(board[x][i] != ".") return false;
    }

    // left diagonal
    let sx = x - Math.min(x, y);
    let sy = y - Math.min(x, y)
    while(sx < n && sy < n) {
      if(board[sx][sy] != ".") return false;
      sx++;
      sy++;
    }

    // Right diagonal
    sx = x - Math.min(x, n - y -1);
    sy = y + Math.min(x, n - y - 1);
    while(sx < n && sy >= 0) {
      if(board[sx][sy] != ".") return false
      sx++;
      sy--;
    }
    return true;

  }
}

/* 
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Dang backtrack nay hay. Ki vong vao buoi 

*/
