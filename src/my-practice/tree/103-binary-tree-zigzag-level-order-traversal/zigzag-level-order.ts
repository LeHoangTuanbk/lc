import { TreeNode } from '../../../dsa1/lesson11-graph2/tree-node';

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

function zigzagLevelOrder2(root: TreeNode | null): number[][] {
  if (!root) return [];

  const nums: number[][] = [];
  let currentLevelNodes: TreeNode[] = [];
  currentLevelNodes.push(root);
  let isLeftToRight = true;
  const queue: TreeNode[][] = [];
  queue.push(currentLevelNodes);

  while (queue.length) {
    currentLevelNodes = queue.shift();
    currentLevelNodes.reverse();
    const nextLevelNodes: TreeNode[] = [];
    const currentNums: number[] = [];

    while (currentLevelNodes.length) {
      const node = currentLevelNodes.shift();
      currentNums.push(node.val);
      const leftNode = node.left;
      const rightNode = node.right;

      if (isLeftToRight) {
        if (leftNode) nextLevelNodes.push(leftNode);
        if (rightNode) nextLevelNodes.push(rightNode);
      } else {
        if (rightNode) nextLevelNodes.push(rightNode);
        if (leftNode) nextLevelNodes.push(leftNode);
      }
    }

    isLeftToRight = !isLeftToRight;
    if (nextLevelNodes.length > 0) {
      queue.push(nextLevelNodes);
    }
    nums.push(currentNums);
  }

  return nums;
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const nums: number[][] = [];
  let currentLevelNodes: TreeNode[] = [];
  currentLevelNodes.push(root);
  let isLeftToRight = true;
  const queue: TreeNode[][] = [];
  queue.push(currentLevelNodes);

  while (queue.length) {
    currentLevelNodes = queue.shift();
    const nextLevelNodes: TreeNode[] = [];
    const currentVals: number[] = new Array(currentLevelNodes.length);

    for (let i = 0; i < currentLevelNodes.length; i++) {
      const node = currentLevelNodes[i];
      const index = isLeftToRight ? i : currentLevelNodes.length - 1 - i;
      currentVals[index] = node.val;
      if (node.left) nextLevelNodes.push(node.left);
      if (node.right) nextLevelNodes.push(node.right);
    }

    isLeftToRight = !isLeftToRight;
    if (nextLevelNodes.length > 0) {
      queue.push(nextLevelNodes);
    }
    nums.push(currentVals);
  }

  return nums;
}
