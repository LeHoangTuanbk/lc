import { TreeNode } from '../../../tree-node';

// Time: O(n2)
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length == 0) return null;
  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);
  const rootValueIndex = inorder.indexOf(rootValue);
  root.left = buildTree(preorder.slice(1, rootValueIndex + 1), inorder.slice(0, rootValueIndex));
  root.right = buildTree(preorder.slice(rootValueIndex + 1), inorder.slice(rootValueIndex + 1));
  return root;
}
/* 
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

*/
//O(n), using two pointers
function buildTree3(preorder: number[], inorder: number[]): TreeNode | null {
  const indexMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  let preorderIdx = 0;

  function helper(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const rootVal = preorder[preorderIdx++];
    const root = new TreeNode(rootVal);
    const mid = indexMap.get(rootVal)!;

    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);
    return root;
  }

  return helper(0, inorder.length - 1);
}

function buildTree4(preorder: number[], inorder: number[]): TreeNode | null {
  const indexMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }
  function buildTreeHelper(
    preorder: number[],
    inorder: number[],
    inorderStartIndex: number,
  ): TreeNode | null {
    if (preorder.length === 0 || inorder.length == 0) return null;
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    const rootValueIndex = indexMap.get(rootValue);
    const leftCount = rootValueIndex - inorderStartIndex;
    root.left = buildTreeHelper(
      preorder.slice(1, leftCount + 1),
      inorder.slice(0, leftCount),
      inorderStartIndex,
    );
    root.right = buildTreeHelper(
      preorder.slice(leftCount + 1),
      inorder.slice(leftCount + 1),
      rootValueIndex + 1,
    );
    return root;
  }

  return buildTreeHelper(preorder, inorder, 0);
}

function buildTree5(preorder: number[], inorder: number[]): TreeNode | null {
  const indexMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  function helper(preL: number, preR: number, inL: number, inR: number): TreeNode | null {
    if (preL > preR || inL > inR) return null;

    const rootVal = preorder[preL];
    const root = new TreeNode(rootVal);
    const mid = indexMap.get(rootVal)!;
    const leftCount = mid - inL;

    root.left = helper(preL + 1, preL + leftCount, inL, mid - 1);
    root.right = helper(preL + leftCount + 1, preR, mid + 1, inR);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
