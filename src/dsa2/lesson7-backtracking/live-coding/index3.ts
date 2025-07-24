export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  const used = Array(n).fill(false);

  function backtrack(path: number[]) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);

  return result;
}

/* 
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Code theo template của anh đỡ nhầm hẳn ạ. 

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

function permute2(nums: number[]): number[][] {
  const n = nums.length;
  const vis = Array(n).fill(0);
  const res: number[][] = [];
  function dfs(idx: number, n: number, vis: boolean[], nums: number[], lst: number[]) {
    if (idx >= n) {
      res.push([...lst]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (vis[i]) continue;
      vis[i] = true;
      lst.push(nums[i]);
      dfs(idx + 1, n, vis, nums, lst);
      lst.pop();
      vis[i] = false;
    }
  }

  dfs(0, n, vis, nums, []);
  return res;
}

function solveSudoku(board: string[][]): void {
  function dfs(x: number, y: number, board: string[][]): boolean {
    if (x >= 9) {
      return true;
    }

    const next = chooseNext(x, y);
    if (board[x][y] != '.') {
      return dfs(next[0], next[1], board);
    }
    // [1,2,4,...]
    const remove = Array(10).fill(false);
    removeCandidate(x, y, board, remove);

    for (let i = 1; i <= 9; i++) {
      if (remove[i]) {
        continue;
      }

      board[x][y];
    }
  }

  function removeCandidate(x: number, y: number, board: string[][], remove: boolean[]) {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] != '.') {
        remove[board[x][i].charCodeAt(0) - '0'.charCodeAt(0)] = true;
      }

      if (board[i][y] != '.') {
        remove[board[i][y].charCodeAt(0) - '0'.charCodeAt(0)] = true;
      }
    }

    // check box
    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let i = startX; i < startX + 3; i++) {
      // ... startY + 3;
    }
  }

  function chooseNext(x: number, y: number) {
    if (y >= 8) {
      return [x + 1, 0];
    }
    return [x, y + 1];
  }
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
/* 
Bài này các lựa chọn cho các số ở mỗi vị trí trống khó code ghê. 

Bài này em mới nghĩ ra cách mỗi trạng thái duyệt hết matrix 9*9 rồi thử từ 1 đến 9, check valid thì đi tiếp. Có vẻ states lớn.

9 * 9!;

*/
