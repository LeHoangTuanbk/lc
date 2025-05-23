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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const s: number[] = [],
    res: number[][] = [];

  function sum(node: TreeNode | null, targetSum: number) {
    if (node === null) return;
    s.push(node.val);
    if (node.left === null && node.right === null) {
      if (node.val === targetSum) {
        res.push([...s]);
      }
      s.pop();
      return;
    }
    sum(node?.left, targetSum - node?.val);
    sum(node?.right, targetSum - node?.val);

    s.pop();
  }

  sum(root, targetSum);
  return res;
}
