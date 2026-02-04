import { TreeNode } from '../../recursion/894-all-possible-full-binary-trees/solution';

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
export function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) return new TreeNode(val, root, null);
  let currentDepth = 1;
  let queue: TreeNode[] = [root];
  while (currentDepth < depth) {
    const tempQueue: TreeNode[] = [];
    for (const node of queue) {
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }
    queue = tempQueue;
    currentDepth++;
  }
  for (const node of queue) {
    if (node.left) node.left = new TreeNode(val, node.left, null);
    if (node.right) node.right = new TreeNode(val, null, node.right);
  }
  return root;
}
