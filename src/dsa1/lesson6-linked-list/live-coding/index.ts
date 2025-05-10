// function reverseList(head: ListNode | null): ListNode | null {
//   if (head == null) return head;

//   let cur: ListNode | null = head;
//   let prev: ListNode | null = null;
//   let next: ListNode | null = null;

//   while (cur != null) {
//     next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }

//   return prev;
// }

// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// // function middleNode(head: ListNode | null): ListNode | null {
// //   let slow = head,
// //     fast = head;
// //   while (fast != null && fast.next != null) {
// //     slow = slow.next;
// //     fast = fast.next.next;
// //   }
// //   return slow;
// // }

// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let cur: ListNode = head;

//   while (cur != null) {
//     while (cur.next != null && cur.next.val === cur.val) {
//       cur.next = cur.next.next;
//     }
//     cur = cur.next;
//   }
//   return head;
// }

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   let cur: ListNode | null = head;
//   let prev: ListNode = null;
//   while (cur != null) {
//     if (cur.val == val) {
//       if (prev == null) {
//       } else {
//         prev.next = cur.next;
//       }
//     } else {
//       prev = cur;
//       cur = cur.next;
//     }
//   }
//   return head;
// }

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   const lengthA = getListLength(headA);
//   const lengthB = getListLength(headB);

//   let curA = headA;
//   let curB = headB;

//   for(let i = 0; i < lengthA - lengthB; i++) {
//     curA = curA?.next;
//   }
//   for(let i = 0; i < lengthB - lengthA; i++) {
//     curB = curB?.next;
//   }

//   while(curA != null) {
//     if(curA == curB) return curA;
//     curA = curA.next;
//     curB = curB.next;
//   }

//   function getListLength(ListNode  head){

//   }

// }
