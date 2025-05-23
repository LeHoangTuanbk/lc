import { TreeNode } from '../../tree-node';

export function isBalanced2(root: TreeNode | null): boolean {
  const heightMap = new Map<TreeNode | null, number>();

  function height(node: TreeNode | null): number {
    if (node === null) return 0;
    if (heightMap.has(node)) return heightMap.get(node)!;

    const h = 1 + Math.max(height(node.left), height(node.right));
    heightMap.set(node, h);
    return h;
  }

  function isTreeBalanced(node: TreeNode | null): boolean {
    if (node === null) return true;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return isTreeBalanced(node.left) && isTreeBalanced(node.right);
  }

  return isTreeBalanced(root);
}

export function isBalanced(root: TreeNode | null): boolean {
  let balanced = true;

  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) balanced = false;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  dfs(root);

  return balanced;
}
