export function findBottomLeftValue(root: TreeNode | null): number {
  let queue: TreeNode[] = [root];
  let bottomLeft = root.val;
  while (queue.length) {
    const size = queue.length;
    const tempQueue: TreeNode[] = [];
    bottomLeft = queue[0].val;
    for (let i = 0; i < size; i++) {
      const node = queue[i];
      if (node.left) {
        tempQueue.push(node.left);
      }
      if (node.right) tempQueue.push(node.right);
    }
    queue = tempQueue;
  }
  return bottomLeft;
}
