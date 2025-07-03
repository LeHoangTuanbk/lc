import { TreeNode } from '../../../tree-node';
// Recursive method,Time: O(n), Space: O(h)
function insertIntoBST2(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val);
  if (root.val < val) root.right = insertIntoBST2(root.right, val);
  if (root.val > val) root.left = insertIntoBST2(root.left, val);
  return root;
}

// Iterative method, Time: O(n), Space: O(1)
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val);
  let cur = root;
  while (true) {
    if (cur.val < val) {
      if (cur.right) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        break;
      }
    }

    if (cur.val > val) {
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        break;
      }
    }
  }

  return root;
}
