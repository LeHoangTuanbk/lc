export class _Node {
  val: boolean;
  isLeaf: boolean;
  topLeft: _Node | null;
  topRight: _Node | null;
  bottomLeft: _Node | null;
  bottomRight: _Node | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: _Node,
    topRight?: _Node,
    bottomLeft?: _Node,
    bottomRight?: _Node,
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}

function construct(grid: number[][]): _Node | null {
  const n = grid.length;
  return createNode(grid, 0, 0, n);
}

function createNode(grid: number[][], i: number, j: number, w: number): _Node {
  const val = isLeafNode(grid, i, j, w);
  if (val !== -1) {
    return new _Node(Boolean(val), true);
  }

  const half = w / 2;
  const topLeft = createNode(grid, i, j, half);
  const topRight = createNode(grid, i, j + half, half);
  const bottomLeft = createNode(grid, i + half, j, half);
  const bottomRight = createNode(grid, i + half, j + half, half);
  return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
}

function isLeafNode(grid: number[][], i: number, j: number, w: number): number {
  const val = grid[i][j];
  for (let x = i; x < i + w; x++) {
    for (let y = j; y < j + w; y++) {
      if (grid[x][y] !== val) return -1;
    }
  }
  return val;
}
