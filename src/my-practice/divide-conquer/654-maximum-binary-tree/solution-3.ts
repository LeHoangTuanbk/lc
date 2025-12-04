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

import { TreeNode } from '../../../dsa1/lesson11-graph2/tree-node';

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const stack: TreeNode[] = [];
  for (const num of nums) {
    const node = new TreeNode(num);

    while (stack.length > 0 && stack[stack.length - 1].val < num) {
      node.left = stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].right = node;
    }

    stack.push(node);
  }

  return stack[0] ?? null;
}
