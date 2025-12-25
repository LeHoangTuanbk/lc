import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export {};

function addStrings(num1: string, num2: string): string {
  return String(Number(num1) + Number(num2));
}

class KthLargest {
  private pq = new MinPriorityQueue<number>();
  constructor(k: number, nums: number[]) {
    for (const num of nums) {
      this.pq.enqueue(num);
      if (this.pq.size() > k) {
        this.pq.dequeue();
      }
    }
  }

  add(val: number): number {
    this.pq.enqueue(val);
    this.pq.dequeue();
    return this.pq.front();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
/* 
746. Min Cost Climbing Stairs
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

 

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.


*/
// function minCostClimbingStairs(cost: number[]): number {
//   const n = cost.length;
//   const dp = Array(n + 1).fill(0);
//   for (let i = 2; i < n + 1; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }
//   return dp[n];
// }

// const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// console.log(minCostClimbingStairs(cost));
/* 
747. Largest Number At Least Twice of Others
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/
function dominantIndex(nums: number[]): number {
  let max = -1,
    maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === maxIndex) continue;
    if (max < 2 * nums[i]) return -1;
  }
  return maxIndex;
}

const nums = [3, 6, 1, 0];
console.log(dominantIndex(nums));

/* 
748. Shortest Completing Word
Easy
Topics
premium lock icon
Companies
Hint
Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

 

Example 1:

Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
Output: "steps"
Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
"step" contains 't' and 'p', but only contains 1 's'.
"steps" contains 't', 'p', and both 's' characters.
"stripe" is missing an 's'.
"stepple" is missing an 's'.
Since "steps" is the only word containing all the letters, that is the answer.
Example 2:

Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
Output: "pest"
Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

*/
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  licensePlate = licensePlate.toLowerCase();
  const freq = new Map<string, number>();
  let shortestWord = 'a'.repeat(20);
  for (const c of licensePlate) {
    if (c >= 'a' && c <= 'z') {
      freq.set(c, (freq.get(c) ?? 0) + 1);
    }
  }
  for (const w of words) {
    const wFreq = new Map<string, number>();
    for (const c of w) {
      if (c >= 'a' && c <= 'z') {
        wFreq.set(c, (wFreq.get(c) ?? 0) + 1);
      }
    }
    //compare wFreq and freq
    let isCompleteWord = true;
    for (const key of freq.keys()) {
      if (!wFreq.has(key) || wFreq.get(key) < freq.get(key)) {
        isCompleteWord = false;
      }
    }
    if (isCompleteWord && w.length < shortestWord.length) {
      shortestWord = w;
    }
  }
  return shortestWord;
}

const licensePlate = 'Ah71752',
  words = [
    'suggest',
    'letter',
    'of',
    'husband',
    'easy',
    'education',
    'drug',
    'prevent',
    'writer',
    'old',
  ]; // pest
console.log(shortestCompletingWord(licensePlate, words));
/* 
licensePlate =
"Ah71752"
words =
["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]

Use Testcase
Output
"of"
Expected
"husband"

*/

/* 
762. Prime Number of Set Bits in Binary Representation
Easy
Topics
premium lock icon
Companies
Hint
Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1's present when written in binary.

For example, 21 written in binary is 10101, which has 3 set bits.
 

Example 1:

Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.
Example 2:

Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.

*/
function countPrimeSetBits(left: number, right: number): number {
  let res = 0;
  for (let i = left; i <= right; i++) {
    if (isPrimeSetBits(i)) res++;
  }
  return res;
}

function isPrimeSetBits(num: number): boolean {
  const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  let setBits = 0;
  while (num > 0) {
    setBits += num & 1;
    num = num >> 1;
  }
  return primeSet.has(setBits);
}

const left = 6, // 6,7,8,9,10
  right = 10;
console.log(countPrimeSetBits(left, right));
