import { TreeNode } from '../../../../dsa1/lesson11-graph2/tree-node';

export function minCameraCover(root: TreeNode | null): number {
  // [camera at p, no camera at p, p uncovered by its children]
  function dfs(p: TreeNode | null) {
    if (!p) {
      return [Infinity, 0, Infinity];
    }
    const [l1, l2, l3] = dfs(p.left);
    const [r1, r2, r3] = dfs(p.right);

    const camera = 1 + Math.min(l1, l2, l3) + Math.min(r1, r2, r3);
    const noCamera = Math.min(l1 + r2, l2 + r1, l1 + r1);
    const unCovered = l2 + r2;
    return [camera, noCamera, unCovered];
  }
  const [res1, res2, res3] = dfs(root);
  return Math.min(res1, res2);
}
