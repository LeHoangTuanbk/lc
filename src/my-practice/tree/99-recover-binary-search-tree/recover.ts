import { TreeNode } from '../../../dsa1/lesson11-graph2/tree-node';

export function recoverTree(root: TreeNode | null): void {
  // inorder traversal => sorted array
  const nodes: TreeNode[] = [];
  function inorderTraversal(node: TreeNode | null) {
    if (!node) return;
    inorderTraversal(node.left);
    nodes.push(node);
    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  // find the number which is not in the right place, its value is
  // ...x,a,...b,y..
  // ...y,a,...b,x..
  // ...x,y...
  // ...y,x...
  let x: TreeNode = null,
    y: TreeNode = null;
  for (let i = 1; i < nodes.length; i++) {
    if (nodes[i - 1].val > nodes[i].val) {
      if (!x) {
        y = nodes[i - 1];
        x = nodes[i];
      } else {
        x = nodes[i];
      }
    }
  }

  // swap value to the right place
  if (x && y) {
    const tempVal = x.val;
    x.val = y.val;
    y.val = tempVal;
  }
}
