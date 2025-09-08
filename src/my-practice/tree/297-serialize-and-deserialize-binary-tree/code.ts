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
  if (!root) return '';

  const res: string[] = [];
  const queue: (TreeNode | null)[] = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node.val.toString());
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push('null');
    }
  }

  while (res.at(-1) === 'null') {
    res.pop();
  }

  return res.join(' ');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data.length) return null;
  const treeData = data.split(' ');

  const root = new TreeNode(Number(treeData[0]));
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length && i < treeData.length) {
    const current = queue.shift();
    if (treeData[i] !== 'null') {
      current.left = new TreeNode(Number(treeData[i]));
      queue.push(current.left);
    }
    i++;

    if (i < treeData.length && treeData[i] !== 'null') {
      current.right = new TreeNode(Number(treeData[i]));
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 * 
 * Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
 */
