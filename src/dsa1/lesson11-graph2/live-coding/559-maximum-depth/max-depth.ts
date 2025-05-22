import { Children } from 'react';

export class _Node {
  val: number;
  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth2(root: _Node | null): number {
  if (root === null) return 0;
  let maxD = 0;
  for (const child of root.children) {
    maxD = Math.max(maxD, maxDepth(child));
  }
  return maxD + 1;
}

function maxDepth(root: _Node | null): number {
  if (!root) return 0;
  return 1 + Math.max(0, ...root.children.map(maxDepth));
}
