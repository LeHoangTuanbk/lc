export function isSymmetric(root: TreeNode | null): boolean {
  function isSymmetricCheck(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    return isSymmetricCheck(node1.left, node2.right) && isSymmetricCheck(node1.right, node2.left);
  }
  if (!root) return false;
  return isSymmetricCheck(root.left, root.right);
}
