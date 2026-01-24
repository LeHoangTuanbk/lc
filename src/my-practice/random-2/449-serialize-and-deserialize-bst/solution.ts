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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const res: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return res.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data) return null;
  const vals = data.split(',').map(Number);
  let idx = 0;

  const build = (min: number, max: number): TreeNode | null => {
    if (idx >= vals.length) return null;
    const val = vals[idx];
    if (val < min || val > max) return null;
    idx++;
    const node = new TreeNode(val);
    node.left = build(min, val);
    node.right = build(val, max);
    return node;
  };

  return build(-Infinity, Infinity);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
