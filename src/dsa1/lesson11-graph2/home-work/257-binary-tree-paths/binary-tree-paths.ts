import { TreeNode } from '../../tree-node';

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: number[][] = [];
  const path: number[] = [];
  function findPaths(node: TreeNode | null) {
    if (node === null) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      paths.push([...path]);
    }
    findPaths(node.left);
    findPaths(node.right);
    path.pop();
  }
  findPaths(root);

  return paths.map((path) => path.join('->'));
}
