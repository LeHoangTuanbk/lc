export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map = new Map<number, number>();
  for (const [idx, val] of nums1) {
    map.set(idx, (map.get(idx) ?? 0) + val);
  }
  for (const [idx, val] of nums2) {
    map.set(idx, (map.get(idx) ?? 0) + val);
  }

  return new Array(...map.entries()).sort((a, b) => a[0] - b[0]);
}

const nums1 = [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  nums2 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ];
console.log(mergeArrays(nums1, nums2));

/* 
Example 1:

Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.
Example 2:

Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
Explanation: There are no common ids, so we just include each id with its value in the resulting list.

*/
