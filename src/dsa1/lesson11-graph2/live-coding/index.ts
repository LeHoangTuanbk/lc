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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSymmetric(root: TreeNode | null): boolean {
  function isMirror(left: TreeNode | null, right: TreeNode | null) {
    // so sanh trai = phai,
  }
}

class _Node {
  val: number;
  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: _Node | null): number {
  if (root === null) return 0;
  let d = 0;
  if (root.children) {
    for (const child of root.children) {
      d = Math.max(d, maxDepth(child));
    }
  }
  return d + 1;
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
