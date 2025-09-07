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

function preorderTraversal(node: TreeNode | null, nodes: TreeNode[]) {
  if (!node) return;
  nodes.push(node);
  preorderTraversal(node.left, nodes);
  preorderTraversal(node.right, nodes);
}

function flatten(root: TreeNode | null): void {
  /**
        Solution 1: convert tree to array by pre order traversal => create List
        Solution 2: While pre order traversal, => create list
     */
  if (!root) return;
  const nodes: TreeNode[] = [];

  preorderTraversal(root, nodes);

  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].left = null;
    nodes[i - 1].right = nodes[i];
  }
}
