import { TreeNode } from '../../tree-node';
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  const tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  const nodeStack: TreeNode[] = [];
  nodeStack.push(root);

  while (nodeStack.length) {
    const node = nodeStack.pop()!;
    const tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;

    if (node.left) {
      nodeStack.push(node.left);
    }
    if (node.right) {
      nodeStack.push(node.right);
    }
  }
  return root;
}

export function invertTree3(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  const nodeQueue: TreeNode[] = [];
  nodeQueue.push(root);

  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;
    const tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;

    if (node.left) {
      nodeQueue.push(node.left);
    }
    if (node.right) {
      nodeQueue.push(node.right);
    }
  }
  return root;
}
