import { TreeNode } from '../../../tree-node';

function sumNumbers(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode, curSum: number) {
    if (!node) return;
    curSum = curSum * 10 + node.val;
    if (!node.left && !node.right) {
      sum += curSum;
      return;
    }
    if (node.left) dfs(node.left, curSum);
    if (node.right) dfs(node.right, curSum);
  }

  dfs(root, 0);
  return sum;
}
