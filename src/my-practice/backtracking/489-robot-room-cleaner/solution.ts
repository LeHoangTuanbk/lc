interface Robot {
  move(): boolean;
  turnLeft(): void;
  turnRight(): void;
  clean(): void;
}

export class MockRobot implements Robot {
  private grid: number[][];
  private dir: number; // 0=up,1=right,2=down,3=left
  private pos: [number, number];
  public cleaned: Set<string> = new Set();

  constructor(grid: number[][], start: [number, number]) {
    this.grid = grid;
    this.pos = start;
    this.dir = 0;
  }

  move(): boolean {
    const dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    const [r, c] = this.pos;
    const [dr, dc] = dirs[this.dir];
    const [nr, nc] = [r + dr, c + dc];
    if (
      nr >= 0 &&
      nc >= 0 &&
      nr < this.grid.length &&
      nc < this.grid[0].length &&
      this.grid[nr][nc] === 1
    ) {
      this.pos = [nr, nc];
      return true;
    }
    return false;
  }

  turnLeft(): void {
    this.dir = (this.dir + 3) % 4;
  }

  turnRight(): void {
    this.dir = (this.dir + 1) % 4;
  }

  clean(): void {
    const [r, c] = this.pos;
    this.cleaned.add(`${r},${c}`);
  }

  getPosition(): [number, number] {
    return this.pos;
  }
}

export function cleanRoom(robot: Robot): void {
  const visited = new Set<string>();
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function goBack() {
    robot.turnLeft();
    robot.turnLeft();
    robot.move();
    robot.turnLeft();
    robot.turnLeft();
  }

  function dfs(r: number, c: number, d: number) {
    const key = `${r},${c}`;
    visited.add(key);
    robot.clean();

    for (let i = 0; i < 4; i++) {
      const nd = (d + i) % 4;
      const [dr, dc] = dirs[nd];
      const nr = r + dr,
        nc = c + dc;
      const newKey = `${nr},${nc}`;

      if (!visited.has(newKey) && robot.move()) {
        dfs(nr, nc, nd);
        goBack();
      }

      robot.turnRight();
    }
  }
  dfs(0, 0, 0);
}

const room = [
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  row = 1,
  col = 3;
