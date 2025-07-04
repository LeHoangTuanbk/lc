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

export function isValidBST5(root: TreeNode | null): boolean {
  function isValidBSTHelper(node: TreeNode | null, min: number, max: number) {
    if (!node) return true;
    if (node.val < min || node.val > max) return false;
    return (
      isValidBSTHelper(node.left, min, node.val - 1) &&
      isValidBSTHelper(node.right, node.val + 1, max)
    );
  }

  return isValidBSTHelper(root, -Infinity, Infinity);
}

export function isValidBST2(root: TreeNode | null): boolean {
  let prev: number | null = null;

  function inorder(node: TreeNode | null): boolean {
    if (!node) return true;
    if (!inorder(node.left)) return false;

    if (prev !== null && node.val <= prev) return false;
    prev = node.val;

    return inorder(node.right);
  }

  return inorder(root);
}

export function isValidBST3(root: TreeNode | null): boolean {
  function isValidBSTHelper(node: TreeNode | null, min: number, max: number) {
    if (!node) return true;
    if (node.val < min || node.val > max) return false;
    return (
      isValidBSTHelper(node.left, min, node.val - 1) &&
      isValidBSTHelper(node.right, node.val + 1, max)
    );
  }
  return isValidBSTHelper(root, -Infinity, Infinity);
}
