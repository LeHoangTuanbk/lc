/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// function twoSum(nums: number[], target: number): number[] {
//   const numsCount = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     numsCount.set(num, i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if (numsCount.get(num2)) {
//       return [i, numsCount.get(num2)];
//     }
//   }
// }

/*
Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/
function sumOfUnique(nums: number[]): number {
  const numsCount = new Map();
  for (let num of nums) {
    numsCount.set(num, (numsCount.get(num) ?? 0) + 1);
  }
  let res = 0;
  for (let [key, count] of numsCount.entries()) {
    if (count === 1) {
      res += key;
    }
  }
  return res;
}
console.log(sumOfUnique([1, 2, 3, 4, 5]));

/*
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

ransomNote =
"aa"
magazine =
"ab"
*/
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCharacters = magazine.split('');
  const magazineMap = new Map();
  const ransomNoteCharacters = ransomNote.split('');
  for (let c of magazineCharacters) {
    magazineMap.set(c, (magazineMap.get(c) ?? 0) + 1);
  }
  for (let c of ransomNoteCharacters) {
    if (magazineMap.get(c) < 1) return false;
    magazineMap.set(c, magazineMap.get(c) - 1);
  }
  return true;
}

/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Em nghĩ ra cách nhưng mà hơi dài ạ
1. Tách ra thành các characters của từng phần tử
2. Với mỗi item trong array, sort lại theo alphabet
3. Dùng Map lưu lại các index của array giống nhau
4. Từ các index, trace lại array gốc và return 
*/
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
}
