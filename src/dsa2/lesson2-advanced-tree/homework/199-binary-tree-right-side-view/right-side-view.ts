import { TreeNode } from '../../tree-node';

function rightSideView(root: TreeNode | null): number[] {
  //BFS -> take the rightest at each level
  if (!root) return [];
  const queue: TreeNode[] = [root];
  const res: number[] = [];
  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === levelSize - 1) {
        res.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
}
