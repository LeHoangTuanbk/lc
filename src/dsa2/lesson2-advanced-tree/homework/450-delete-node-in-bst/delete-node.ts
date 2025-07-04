import { TreeNode } from '../../tree-node';

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  // search for a node
  // delete a node
  // no children, 1 child, 2 children
  if (!root) return null;
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }

  // Found node
  // no children
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    // one child
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // 2 children
    const minNode = findMinRight(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
}

function findMinRight(node: TreeNode) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
