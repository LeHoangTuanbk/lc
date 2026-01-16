export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  function countFrom(node: TreeNode | null, sum: number): number {
    if (!node) return 0;
    sum += node.val;

    return (sum === targetSum ? 1 : 0) + countFrom(node.left, sum) + countFrom(node.right, sum);
  }
  return countFrom(root, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}
