import { BinaryTreeNode } from '../tree-node';
function isSameTree(p: BinaryTreeNode | null, q: BinaryTreeNode | null): boolean {
  if (q === null && p === null) return true;
  if (p === null || q === null) return false;
  if (q.val != p.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
