export function pathSum(root: TreeNode | null, targetSum: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);

  function dfs(node: TreeNode | null, curSum: number): number {
    if (!node) return 0;

    curSum += node.val;

    let res = map.get(curSum - targetSum) ?? 0;
    map.set(curSum, (map.get(curSum) ?? 0) + 1);

    res += dfs(node.left, curSum);
    res += dfs(node.right, curSum);

    map.set(curSum, map.get(curSum) - 1);

    return res;
  }

  return dfs(root, 0);
}
