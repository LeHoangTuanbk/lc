class _Node {
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

export function intersect(quadTree1: _Node | null, quadTree2: _Node | null): _Node | null {
  if (!quadTree1) return quadTree2;
  if (!quadTree2) return quadTree1;

  if (quadTree1.isLeaf && quadTree2.isLeaf) {
    return new _Node(quadTree1.val || quadTree2.val, true);
  }

  if (quadTree1.isLeaf) {
    if (quadTree1.val) {
      return new _Node(true, true);
    } else {
      return quadTree2;
    }
  }

  if (quadTree2.isLeaf) {
    if (quadTree2.val) {
      return new _Node(true, true);
    } else {
      return quadTree1;
    }
  }

  const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
  const topRight = intersect(quadTree1.topRight, quadTree2.topRight);
  const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
  const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

  if (
    topLeft.isLeaf &&
    topRight.isLeaf &&
    bottomLeft.isLeaf &&
    bottomRight.isLeaf &&
    topLeft.val === topRight.val &&
    topRight.val === bottomLeft.val &&
    bottomLeft.val === bottomRight.val
  ) {
    return new _Node(topLeft.val, true);
  }
  return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
}
