# Youtube Video

https://www.youtube.com/watch?v=Kelo4EVpFz4

## Problem

### Problem 1:

Given a string, find the length of the longest substring without repeating characters.

Given "abcabcbb", the answer is "abc", of which the length is 3.
Given "bbbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3.
Note that the answer must be a substring. "pwke" is a subsequence and not a substring.

Solution 1: Traverse all the substrings: O(n2).
Solution 2: Sliding window: O(n)
i, j.

```Typescript
export function findTheLongestSubstring(s: string): number {
  const n = s.length;
  let i = 0,
    j = 0; // window = s[i...j-1]
  const set = new Set<string>();
  let maxLength = 0;
  while (j < n) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return maxLength;
}
```

Dry run:
Input: "abcabcbb";
n = 8;

Step 1: i = 0, j = 0, set = {}
=> i = 0, j = 1, set = {a}, max = 1

Step 2: s[1] = b, set.has(s[1]) = false
=> i = 0, j = 2, set = {a, b}, max = 2

Step 3: s[2] = c, set.has(s[2]) = false
=> i = 0, j = 3, set = {a, b, c}, max = 3 for "abc"

Step 4: s[3] = a, set.has(s[3]) = true
=> set = {b,c}, i = 1, j = 3

Step 5: s[3] = a, set.has(s[3]) = false
=> set = {b,c,a}, i = 1, j = 4, max = 3

Step 6: s[4] = b, set.has(s[4]) = true
=> set = {c,a}, i = 2, j = 4, max = 3

Step 7: s[4] = b, set.has(s[4]) = false
=> set = {c,a,b}, i = 2, j = 5, max = 3

Step 8: s[5] = c, set.has(s[5]) = true
=> set = {a,b}, i = 3, j = 5, max = 3

Step 9: s[5] = c, set.has(s[5]) = false
=> set = {a,b,c}, i = 3, j = 6, max = 3

Step 10: s[6] = b, set.has(s[6]) = true
=> set = {b,c}, i = 4, j = 6, max = 3

Step 11: s[6] = b, set.has(s[6]) = true
=> set = {c}, i = 5, j = 6, max = 3

Step 12: s[6] = b, set.has(s[6]) = false
=> set = {c, b}, i = 5, j = 7, max = 3

Step 13: s[7] = b, set.has(s[7]) = true
=> set = {b}, i = 6, j = 7, max = 3

Step 14: s[7] = b, set.has(s[7]) = true
=> set = {}, i = 7, j = 7, max = 3

Step 15: s[7] = b, set.has(s[7]) = false
=> set = {b}, i = 7, j = 8, max = 3

=> break while
=> return maxLength = 3

### Problem 2:

Given the binary tree
Print the maximum depth of that tree

```Typescript
class TreeNode {
  private val: number;
  private left: TreeNode | null;
  private right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right? : TreeNode | null) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

function maxDepth(node: TreeNode | null): number {
  if(!node) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
```

Simple example tree

      1
    /   \

2 3
/
4

Expected max depth = 3

maxDepth(1) = max(depth(2), depth(3)) + 1;

depth(3) = 1
depth(2) = max(depth(4), depth(null)) + 1 = 2

=> maxDepth(1) = 3
