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
  const result: string[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(' ');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(' ');
  let index = 0;

  function dfs(): TreeNode | null {
    if (values[index] === 'null') {
      index++;
      return null;
    }

    const node = new TreeNode(Number(values[index]));
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
