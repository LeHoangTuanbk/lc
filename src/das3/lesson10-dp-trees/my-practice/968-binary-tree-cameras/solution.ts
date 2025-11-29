import { TreeNode } from '../../../../dsa2/lesson2-advanced-tree/tree-node';

const HAS_CAMERA = 0,
  COVERED = 1,
  NEED = 2;
export function minCameraCover(root: TreeNode | null): number {
  let camera = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return COVERED;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left === NEED || right === NEED) {
      camera++;
      return HAS_CAMERA;
    }

    if (left === HAS_CAMERA || right === HAS_CAMERA) {
      return COVERED;
    }

    // left, right: cover => node: need;
    return NEED;
  }

  const rootState = dfs(root);
  if (rootState === NEED) camera++;
  return camera;
}
