export function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];
  let queue: TreeNode[] = [root];
  const res: number[] = [];
  while (queue.length) {
    const count = queue.length;
    const tempQueue: TreeNode[] = [];
    let max = -Infinity;
    for (let i = 0; i < count; i++) {
      max = Math.max(max, queue[i].val);
      const node = queue[i];
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }
    queue = tempQueue;
    res.push(max);
  }
  return res;
}
