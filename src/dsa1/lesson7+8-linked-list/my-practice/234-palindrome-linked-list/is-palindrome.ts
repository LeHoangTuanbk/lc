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
import { ListNode } from '../../live-coding/linkedList';
export function isPalindrome10(head: ListNode | null): boolean {
  // Get length of linked list
  // n: le lay len Math.floor n/2, n chan, lay den n/2
  let lengthOfList = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    lengthOfList++;
  }
  const indexToReverse = Math.ceil(lengthOfList / 2);
  let needToTravel = lengthOfList - indexToReverse;
  let reverseFromNode = head;
  let i = 1;
  while (i <= indexToReverse && reverseFromNode) {
    reverseFromNode = reverseFromNode.next;
    i++;
  }
  cur = reverseFromNode;
  let nextNode = reverseFromNode?.next;
  while (cur && nextNode) {
    let next = nextNode.next;
    nextNode.next = cur;
    cur = nextNode;
    nextNode = next;
  }
  while (needToTravel > 0 && head && cur) {
    if (head.val !== cur.val) {
      return false;
    }
    head = head.next;
    cur = cur.next;
    needToTravel--;
  }

  return true;
}

function isPalindrome11(head: ListNode | null): boolean {
  const listValue: number[] = [];
  let cur = head;
  while (cur) {
    listValue.push(cur.val);
    cur = cur.next;
  }
  let left = 0,
    right = listValue.length - 1;
  while (left < right) {
    if (listValue[left] != listValue[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isPalindrome12(head: ListNode | null): boolean {
  const stackValue: number[] = [];
  let cur = head;
  while (cur) {
    stackValue.push(cur.val);
    cur = cur.next;
  }
  let i = 0;
  let n = stackValue.length;
  while (i < Math.floor(n / 2)) {
    const ithValue = stackValue[i];
    const last = stackValue.pop();
    if (ithValue !== last) {
      return false;
    }
    i++;
  }
  return true;
}

export function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;
  // Find middle node
  const middle = findMiddle(head);
  // Reverse the second half
  const secondHalf = reverseList(middle);
  // Compare the first and second haft, return result
  const res = compare2Lists(head, secondHalf);

  return res;
}

function findMiddle(head: ListNode): ListNode {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  return slow.next!;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

function compare2Lists(list1: ListNode | null, list2: ListNode | null): boolean {
  while (list1 && list2) {
    if (list1.val !== list2.val) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return true;
}
