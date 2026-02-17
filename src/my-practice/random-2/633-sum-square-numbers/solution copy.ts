export function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) return true;
    if (sum < c) left++;
    else right--;
  }
  return false;
}

const c = 0;
console.log(judgeSquareSum(c));
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

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let maxWidth = 0n;
  const queue: [TreeNode, bigint][] = [[root, 0n]];

  while (queue.length > 0) {
    const size = queue.length;

    let left = 0n,
      right = 0n;
    for (let i = 0; i < size; i++) {
      const [node, idx] = queue.shift();

      if (i === 0) left = idx;
      if (i === size - 1) right = idx;
      if (node.left) queue.push([node.left, 2n * idx]);
      if (node.right) queue.push([node.right, 2n * idx + 1n]);
    }
    const width = right - left + 1n;
    if (maxWidth > width) {
      maxWidth = width;
    }
  }

  return Number(maxWidth);
}
