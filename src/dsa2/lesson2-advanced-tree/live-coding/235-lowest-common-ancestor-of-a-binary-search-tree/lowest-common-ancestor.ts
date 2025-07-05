import { TreeNode } from '../../tree-node';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  function lcaHelper(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
  ): TreeNode | null {
    if (!root) return root;
    const pVal = p.val;
    const qVal = q.val;
    const curVal = root.val;

    if (curVal === pVal || curVal === qVal) return root;
    if (curVal > pVal && curVal > qVal) return lcaHelper(root.left, p, q);
    if (curVal < pVal && curVal < qVal) return lcaHelper(root.right, p, q);
    return root;
  }

  return lcaHelper(root, p, q);
}

function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let node = root;
  while (node) {
    const pVal = p.val;
    const qVal = q.val;
    const curVal = node.val;
    if (pVal < curVal && qVal < curVal) {
      node = node.left;
    } else if (pVal > curVal && qVal > curVal) {
      node = node.right;
    } else {
      return node;
    }
  }
  return null;
}
