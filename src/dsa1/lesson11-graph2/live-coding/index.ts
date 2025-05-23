function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const s: number[] = [],
    res: number[][] = [];

  function sum(node: TreeNode | null, targetSum: number) {
    if (node === null) return;
    s.push(node.val);
    if (node.left === null && node.right === null) {
      if (node.val === targetSum) {
        res.push([...s]);
      }
      s.pop();
      return;
    }
    sum(node?.left, targetSum - node?.val);
    sum(node?.right, targetSum - node?.val);

    s.pop();
  }

  sum(root, targetSum);
  return res;
}
