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
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head: ListNode | null;
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let cur = head;
  while (list1 && list2) {
    let temp: ListNode;
    if (list1.val < list2.val) {
      temp = list1;
      list1 = list1.next;
    } else {
      temp = list2;
      list2 = list2.next;
    }
    cur.next = temp;
    cur = cur.next;
  }

  while (list1) {
    cur.next = list1;
    list1 = list1.next;
    cur = cur.next;
  }

  while (list2) {
    cur.next = list2;
    list2 = list2.next;
    cur = cur.next;
  }

  return head;
}
