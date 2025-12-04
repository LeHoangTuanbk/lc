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

function getMaxIndex(nums: number[], l: number, r: number): number {
  let maxIndex = l;
  for (let i = l; i <= r; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }
  return maxIndex;
}

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  function construct(nums: number[], l: number, r: number): TreeNode | null {
    if (l > r) return null;
    if (l === r) {
      return new TreeNode(nums[l]);
    } else {
      const maxIndex = getMaxIndex(nums, l, r);
      const currentNode = new TreeNode(nums[maxIndex]);
      currentNode.left = construct(nums, l, maxIndex - 1);
      currentNode.right = construct(nums, maxIndex + 1, r);
      return currentNode;
    }
  }

  return construct(nums, 0, nums.length - 1);
}
