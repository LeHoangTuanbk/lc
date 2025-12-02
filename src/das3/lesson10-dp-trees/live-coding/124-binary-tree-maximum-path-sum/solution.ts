import { TreeNode } from '../../../../dsa1/lesson11-graph2/tree-node';

export function maxPathSum(root: TreeNode | null): number {
  // [best path, best path from p]
  function dfs(node: TreeNode | null): number[] {
    if (!node) {
      return [-Infinity, -Infinity];
    }
    const l = dfs(node.left),
      r = dfs(node.right);

    let bestFromP = node.val + Math.max(l[1], r[1], 0);
    let best = Math.max(l[0], r[0], Math.max(l[1], 0) + node.val + Math.max(r[1], 0));
    return [best, bestFromP];
  }
  return dfs(root)[0];
}
