class _Node {
  val: boolean;
  isLeaf: boolean;
  topLeft: Node | null;
  topRight: Node | null;
  bottomLeft: Node | null;
  bottomRight: Node | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: Node,
    topRight?: Node,
    bottomLeft?: Node,
    bottomRight?: Node,
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
  function isLeafNode(grid: number[][], i: number, j: number, w: number) {
    let val = grid[i][j];
    for (let x = i; i < i + w; i++) {
      for (let y = j; j < j + w; j++) {
        if (grid[x][y] != val) return -1;
      }
    }
    return val;
  }

  function createNode(grid: number[][], i: number, j: number, w: number) {
    let val = isLeafNode(grid, i, j, w);
    if (val != -1) {
      return new _Node(val, true, null, null, null, null);
    }
    const node = new _Node(val, false, null, null, null, null);
  }

  const n = grid.length;
  let root = createNode(grid, 0, 0, n);
  return root;
}
// Cảm giác bài này đọc vẫn chưa hiểu đề lắm ạ.
