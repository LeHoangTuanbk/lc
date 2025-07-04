import { TreeNode } from '../../tree-node';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const levelSize = queue.length;
    const nodesAtCurrentLevel: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      nodesAtCurrentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(nodesAtCurrentLevel);
  }
  return res;
}
