import { TreeNode } from '../../../../lesson2-advanced-tree/tree-node';
function rob(root: TreeNode | null): number {
  if (!root) return 0;

  // Case 1: Rob the current node
  let robCurrent = root.val;
  if (root.left) {
    robCurrent += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    robCurrent += rob(root.right.left) + rob(root.right.right);
  }

  // Case 2: Do not rob the current node
  const notRobCurrent = rob(root.left) + rob(root.right);

  return Math.max(robCurrent, notRobCurrent);
}
