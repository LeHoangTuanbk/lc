/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function findMiddleNode(left: ListNode, right: ListNode | null): ListNode {
  let slow = left;
  let fast = left;

  while (fast !== right && fast.next !== right && fast.next?.next !== right) {
    fast = fast.next!.next!;
    slow = slow.next!;
  }

  return slow;
}

function findBeforeNode(head: ListNode, targetedNode: ListNode) {
  if (head == targetedNode) return null;
  let currentNode = head;
  while (currentNode.next !== targetedNode) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function buildTree(left: ListNode | null, right: ListNode | null) {
  if (!left) return null;
  if (left == right) return new TreeNode(left.val);

  const middleNode = findMiddleNode(left, right);
  const treeNode = new TreeNode(middleNode.val);

  const leftEndedNode = findBeforeNode(left, middleNode);
  if (leftEndedNode) treeNode.left = buildTree(left, leftEndedNode);
  else treeNode.left = null;
  treeNode.right = buildTree(middleNode.next, right);

  return treeNode;
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null;
  return buildTree(head, null);
}
