import { TreeNode } from '../../../../dsa1/lesson11-graph2/tree-node';

type Info = {
  isBST: boolean;
  sum: number;
  min: number;
  max: number;
};

export function maxSumBST(root: TreeNode | null): number {
  let maxSum = 0;

  function dfs(node: TreeNode | null): Info {
    if (!node) {
      return {
        isBST: true,
        sum: 0,
        min: Infinity,
        max: -Infinity,
      };
    }

    const L = dfs(node.left);
    const R = dfs(node.right);

    if (L.isBST && R.isBST && node.val > L.max && node.val < R.min) {
      const sum = L.sum + R.sum + node.val;
      maxSum = Math.max(maxSum, sum);

      return {
        isBST: true,
        sum,
        min: Math.min(L.min, node.val),
        max: Math.max(R.max, node.val),
      };
    }

    return {
      isBST: false,
      sum: 0,
      min: -Infinity,
      max: Infinity,
    };
  }

  dfs(root);
  return maxSum < 0 ? 0 : maxSum;
}
