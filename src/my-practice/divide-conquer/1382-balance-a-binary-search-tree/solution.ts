import { TreeNode } from '../../recursion/894-all-possible-full-binary-trees/solution';

export function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const sortedValues: TreeNode[] = [];
  inorderTraversal(root, sortedValues);

  return buildBalancesBST(sortedValues, 0, sortedValues.length - 1);
}

function inorderTraversal(node: TreeNode | null, results: TreeNode[]) {
  if (!node) return;
  inorderTraversal(node.left, results);
  results.push(node);
  inorderTraversal(node.right, results);
}

function buildBalancesBST(values: TreeNode[], left: number, right: number): TreeNode | null {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const root = values[mid];
  root.left = buildBalancesBST(values, left, mid - 1);
  root.right = buildBalancesBST(values, mid + 1, right);
  return root;
}
