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

function getMaxIndex(nums: number[]): number {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }
  return maxIndex;
}

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  const maxIndex = getMaxIndex(nums);
  const currentNode = new TreeNode(nums[maxIndex]);
  currentNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  currentNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return currentNode;
}
