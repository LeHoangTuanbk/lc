import { TreeNode } from '../tree-node';
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  let path: number[] = [];
  function findPath(node: TreeNode | null, target: number) {
    if (node === null) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      if (node.val === targetSum) {
        res.push([...path]);
      }
      path.pop();
      return;
    }
    const value = target - node.val;
    findPath(node.left, value);
    findPath(node.right, value);
    path.pop();
  }

  findPath(root, targetSum);

  return res;
}
