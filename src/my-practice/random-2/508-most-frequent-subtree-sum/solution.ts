export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const sumMap = new Map<number, number>();
  let maxFreq = 0;
  function postOrderTraversal(node: TreeNode | null) {
    if (!node) return 0;
    const left = postOrderTraversal(node.left);
    const right = postOrderTraversal(node.right);
    const sum = left + right + node.val;
    const count = (sumMap.get(sum) ?? 0) + 1;
    sumMap.set(sum, count);
    if (count > maxFreq) maxFreq = count;
    return sum;
  }
  postOrderTraversal(root);
  const res: number[] = [];
  for (const [sum, f] of sumMap.entries()) {
    if (f === maxFreq) {
      res.push(sum);
    }
  }
  return res;
}
