import { TreeNode } from '../../tree-node';

function binaryTreePaths2(root: TreeNode | null): string[] {
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];
  function dfs(node: TreeNode | null, path: string) {
    if (node === null) return;
    path += node.val.toString();
    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      path += '->';
      dfs(node.left, path);
      dfs(node.right, path);
    }
  }
  dfs(root, '');

  return paths;
}
