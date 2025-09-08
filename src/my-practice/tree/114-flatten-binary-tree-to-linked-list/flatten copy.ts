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

/**
 Do not return anything, modify root in-place instead.
 */
export function flatten(root: TreeNode | null): void {
  let prev: TreeNode | null = null;

  function reversePreorder(node: TreeNode | null) {
    if (!node) return;

    reversePreorder(node.right);
    reversePreorder(node.left);
    node.right = prev;
    node.left = null;

    prev = node;
  }

  reversePreorder(root);
}
