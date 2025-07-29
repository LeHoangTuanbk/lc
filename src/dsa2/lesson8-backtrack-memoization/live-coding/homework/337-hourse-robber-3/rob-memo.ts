import { TreeNode } from '../../../../lesson2-advanced-tree/tree-node';

export function rob(root: TreeNode | null): number {
  const memo = new Map<TreeNode, number>();
  return dfs(root, memo);
}

function dfs(node: TreeNode | null, memo: Map<TreeNode, number>): number {
  if (!node) return 0;
  if (memo.has(node)) return memo.get(node);

  let robCurrent = node.val;
  if (node.left) {
    robCurrent += dfs(node.left.left, memo) + dfs(node.left.right, memo);
  }
  if (node.right) {
    robCurrent += dfs(node.right.left, memo) + dfs(node.right.right, memo);
  }

  const notRobCurrent = dfs(node.left, memo) + dfs(node.right, memo);

  const res = Math.max(robCurrent, notRobCurrent);
  memo.set(node, res);
  return res;
}
