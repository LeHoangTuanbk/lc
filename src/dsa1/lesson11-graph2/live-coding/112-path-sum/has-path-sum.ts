import { TreeNode } from '../tree-node';
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  const value = targetSum - root.val;
  return hasPathSum(root.left, value) || hasPathSum(root.right, value);
}
