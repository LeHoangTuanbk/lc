import { TreeNode } from '../../../dsa1/lesson11-graph2/tree-node';

export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  return buildTree(1, n);
}

function buildTree(start: number, end: number): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = [];
  if (start > end) {
    res.push(null);
    return res;
  }
  for (let i = start; i <= end; i++) {
    const leftTree = buildTree(start, i - 1);
    const rightTree = buildTree(i + 1, end);
    for (const left of leftTree) {
      for (const right of rightTree) {
        const root = new TreeNode(i, left, right);
        res.push(root);
      }
    }
  }
  return res;
}
