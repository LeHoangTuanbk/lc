import { TreeNode } from '../../tree-node';

export function isValidBST2(root: TreeNode | null): boolean {
  const treeValue: number[] = [];
  let isValid = true;
  function inOrderTraversal(node: TreeNode | null) {
    if (!isValid) return;
    if (!node) return;
    inOrderTraversal(node.left);
    if (node.val <= treeValue.at(-1)) {
      isValid = false;
    }
    treeValue.push(node.val);

    inOrderTraversal(node.right);
  }
  inOrderTraversal(root);
  return isValid;
}

function isValidBSTHelper(node: TreeNode | null, min: number, max: number) {
  if (!node) return true;
  const val = node.val;
  if (val < min || val > max) return false;
  return isValidBSTHelper(node.right, val + 1, max) && isValidBSTHelper(node.left, min, val - 1);
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBSTHelper(root, -Infinity, Infinity);
}

/* 
Consider using stack to implement DFS

*/

export function isValidBST3(root: TreeNode | null): boolean {
  if (!root) return true;
  const stack: Array<[TreeNode, number, number]> = [[root, -Infinity, Infinity]];

  while (stack.length > 0) {
    const [node, min, max] = stack.pop();
    const val = node.val;
    if (val <= min || val >= max) return false;
    if (node.right) {
      stack.push([node.right, val, max]);
    }

    if (node.left) {
      stack.push([node.left, min, val]);
    }
  }
  return true;
}

export function isValidBST4(root: TreeNode | null): boolean {
  let pre: number = -Infinity;
  let isValid = true;
  function inOrderTraversal(node: TreeNode | null) {
    if (!isValid) return;
    if (!node) return;
    inOrderTraversal(node.left);
    if (node.val <= pre) {
      isValid = false;
    }
    pre = node.val;
    inOrderTraversal(node.right);
  }
  inOrderTraversal(root);

  return isValid;
}
