/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function isValidBST(root: TreeNode | null): boolean {
  const treeValue: number[] = [];
  function postOrderTraversal(node: TreeNode | null) {
    if (!node) return;
    postOrderTraversal(node.left);
    treeValue.push(node.val);
    postOrderTraversal(node.right);
  }
  postOrderTraversal(root);
  if (treeValue.length < 2) return true;
  for (let i = 0; i < treeValue.length - 1; i++) {
    if (treeValue[i] >= treeValue[i + 1]) return false;
  }
  return true;
}
