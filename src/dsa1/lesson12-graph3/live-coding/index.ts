const inf = 10e9;
const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];



export function shortestPathBinaryMatrix2(grid: number[][]): number {
  const n = grid.length;

  // Nếu ô đầu hoặc cuối bị chặn → không thể đi
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  // Nếu chỉ có 1 ô duy nhất và nó là 0
  if (n === 1) return 1;

  const queue: [number, number, number][] = [[0, 0, 1]]; // [x, y, distance]
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  console.log(visited);
  visited[0][0] = true;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift()!;

    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
        if (nx === n - 1 && ny === n - 1) {
          return dist + 1;
        }

        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}

shortestPathBinaryMatrix2([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);

function shortestPathBinaryMatrix3(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
}

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const dist = Array.from({ length: m }, () => Array(n).fill(-1));

  const queue: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [i, j] = queue.shift()!;
    queue.pop();
  }
}

function shortestPath(grid: number[][], k: number): number {
  const nMax = 42;
  const kMax = 1602;
  const dis[nMax][nMax][kMax];

  const queue : number[][][] = []

   dis[0][0][k] = 0;

   const dirs = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];


   while(queue.length) {
    const [i, j, k] = queue.pop();
    for(const [dx, dy]: dirs) {

    }

   }
}


export function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const dist = Array.from({ length: m }, () => Array(n).fill(-1));
  const queue: [number, number][] = [];

  // Bước 1: Tìm tất cả các ô có giá trị 0 và đưa vào hàng đợi
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  // 4 hướng: phải, trái, xuống, lên
  const directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0]
  ];

  // Bước 2: BFS từ tất cả ô 0 cùng lúc
  while (queue.length > 0) {
    const [x, y] = queue.shift()!;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Nếu trong ma trận và chưa cập nhật
      if (
        nx >= 0 && ny >= 0 && nx < m && ny < n &&
        dist[nx][ny] === -1
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return dist;
}