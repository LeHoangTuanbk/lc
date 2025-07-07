function canMakePalindrome(s: string, k: number) {
  const chaFreq = new Map<string, number>();
  s.split('').map((c) => {
    chaFreq.set(c, (chaFreq.get(c) ?? 0) + 1);
  });

  const oddFreq: number[] = [];

  for (const freq of chaFreq.values()) {
    if (freq % 2 === 1) {
      oddFreq.push(freq);
    }
  }
  let oddCount = 0;
  for (const freq of chaFreq.values()) {
    if (freq % 2 === 1) oddCount++;
  }
  return Math.floor(oddCount / 2) <= k;
}

function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const res: boolean[] = [];
  for (const query of queries) {
    const [left, right, k] = query;
    const subString = s.slice(left, right + 1);
    res.push(canMakePalindrome(subString, k));
  }
  return res;
}

const s = 'abcda',
  queries = [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ];
console.log(canMakePaliQueries(s, queries));
console.log(canMakePalindrome('abcda', 1));
/* 
Example :

Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = "d", is palidrome.
queries[1]: substring = "bc", is not palidrome.
queries[2]: substring = "abcd", is not palidrome after replacing only 1 character.
queries[3]: substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4]: substring = "abcda", could be changed to "abcba" which is palidrome.

Example 2:

Input: s = "lyb", queries = [[0,1,0],[2,2,1]]
Output: [false,true]

*/

export function canMakePaliQueries2(s: string, queries: number[][]): boolean[] {
  const n = s.length;
  const prefix: number[] = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const bit = 1 << (s.charCodeAt(i) - 97);
    prefix[i + 1] = prefix[i] ^ bit;
  }

  const res: boolean[] = [];
  for (const [l, r, k] of queries) {
    const mask = prefix[l] ^ prefix[r + 1];
    const bitCount = countBits(mask);
    res.push(Math.floor(bitCount / 2) <= k);
  }
  return res;
}

// Count set bits in a number (Brian Kernighan’s algorithm)
function countBits(x: number): number {
  let count = 0;
  while (x > 0) {
    x &= x - 1;
    count++;
  }
  return count;
}

export function canMakePaliQueries3(s: string, queries: number[][]): boolean[] {
  const n = s.length;
  const prefixCount: number[][] = Array(n + 1)
    .fill(0)
    .map(() => Array(26).fill(0));

  // Build prefixCount[i][j] = số lần xuất hiện của 'a' + j trong s[0..i-1]
  for (let i = 1; i <= n; i++) {
    const c = s.charCodeAt(i - 1) - 97; // 'a' = 97
    for (let j = 0; j < 26; j++) {
      prefixCount[i][j] = prefixCount[i - 1][j] + (j === c ? 1 : 0);
    }
  }

  const res: boolean[] = [];

  for (const [l, r, k] of queries) {
    let odd = 0;
    for (let i = 0; i < 26; i++) {
      const freq = prefixCount[r + 1][i] - prefixCount[l][i];
      odd += freq % 2;
    }

    // Need at most floor(odd / 2) changes
    res.push(odd <= 2 * k + 1);
  }

  return res;
}
