export function longestUnivaluePath(root: TreeNode | null): number {
  let maxLength = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const leftLength = dfs(node.left);
    const rightLength = dfs(node.right);
    let leftExtendable = 0;
    let rightExtendable = 0;

    if (node.left && node.left.val === node.val) {
      leftExtendable = leftLength + 1;
    }
    if (node.right && node.right.val === node.val) {
      rightExtendable = rightLength + 1;
    }
    if (node.left && node.right && node.val === node.left.val && node.val === node.right.val) {
      maxLength = Math.max(maxLength, leftExtendable + rightExtendable);
    } else {
      maxLength = Math.max(maxLength, leftExtendable, rightExtendable);
    }

    return Math.max(leftExtendable, rightExtendable);
  }

  dfs(root);
  return maxLength;
}
