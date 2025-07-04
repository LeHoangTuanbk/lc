class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function isValidBST(root: TreeNode | null): boolean {
  const treeValue: number[] = [];
  let isValid = true;
  function postOrderTraversal(node: TreeNode | null) {
    if (!isValid) return;
    if (!node) return;
    postOrderTraversal(node.left);
    if (node.val <= treeValue.at(-1)) {
      isValid = false;
    }
    treeValue.push(node.val);

    postOrderTraversal(node.right);
  }
  postOrderTraversal(root);
  return isValid;
}

export function isValidBST2(root: TreeNode | null): boolean {
  let prev: number | null = null;

  function inorder(node: TreeNode | null): boolean {
    if (!node) return true;
    if (!inorder(node.left)) return false;

    if (prev !== null && node.val <= prev) return false;
    prev = node.val;

    return inorder(node.right);
  }

  return inorder(root);
}

export function isValidBST3(root: TreeNode | null): boolean {
  function isValidBSTHelper(node: TreeNode | null, min: number, max: number) {
    if (!node) return true;
    if (node.val < min || node.val > max) return false;
    return (
      isValidBSTHelper(node.left, min, node.val - 1) &&
      isValidBSTHelper(node.right, node.val + 1, max)
    );
  }
  return isValidBSTHelper(root, -Infinity, Infinity);
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const levelSize = queue.length;
    const nodesAtCurrentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      nodesAtCurrentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(nodesAtCurrentLevel);
  }
  return res;
}

function levelOrder2(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const treeValues: number[] = [];
  let foundValue = null;
  function postOrderTraversal(node: TreeNode | null) {
    if (foundValue != null) return;
    if (!node) return;
    postOrderTraversal(node.left);
    treeValues.push(node.val);
    if (treeValues.length === k) {
      foundValue = node.val;
    }
    postOrderTraversal(node.right);
  }

  postOrderTraversal(root);

  return foundValue;
}

function kthSmallest2(root: TreeNode | null, k: number): number {
  const treeValues: number[] = [];
  let foundValue = null;
  function postOrderTraversal(node: TreeNode | null) {
    if (foundValue != null) return;
    if (!node) return;
    postOrderTraversal(node.left);
    treeValues.push(node.val);
    if (treeValues.length === k) {
      foundValue = node.val;
    }
    postOrderTraversal(node.right);
  }

  postOrderTraversal(root);

  return foundValue;
}

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
    if (root.val === p.val || root.val === q.val) return root;
    if (root.val > p.val && root.val > q.val) return lcaHelper(root.left, p, q);
    if (root.val < p.val && root.val < q.val) return lcaHelper(root.right, p, q);
    return root;
  }
  return lcaHelper(root, p, q);
}

function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const curVal = root.val;
  const pVal = p.val;
  const qVal = q.val;

  // O giua thi la return duoc hoac gap mot trong 2 value thi ta return duoc z a.
}
