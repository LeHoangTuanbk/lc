import { TreeNode } from '../../tree-node';

function kthSmallest(root: TreeNode | null, k: number): number {
  let idx: number = -1;
  let foundValue: number = null;
  function inOrderTraversal(node: TreeNode | null) {
    if (foundValue !== null) return;
    if (!node) return;
    inOrderTraversal(node.left);
    if (++idx == k - 1) {
      foundValue = node.val;
    }
    inOrderTraversal(node.right);
  }
  inOrderTraversal(root);

  return foundValue;
}
