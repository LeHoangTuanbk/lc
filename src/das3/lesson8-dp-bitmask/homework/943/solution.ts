// cpp: https://leetcode.com/problems/find-the-shortest-superstring/submissions/497209676/
/* 
binary indexed tree (BIT)
fenwick tree

*/
export function shortestSuperstring(words: string[]): string {
  const n = words.length;
  if (n == 1) return words[0];

  // overlap[i][j] = độ dài phần suffix của words[i] trùng với prefix của words[j]
  const overlap: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const minLen = Math.min(words[i].length, words[j].length);
      for (let k = minLen; k >= 0; k--) {
        if (words[i].endsWith(words[j].substring(0, k))) {
          overlap[i][j] = k;
          break;
        }
      }
    }
  }

  // dp initialization
  const dp: number[][] = Array(1 << n)
    .fill(0)
    .map(() => Array(n).fill(Infinity));
  const parent: number[][] = Array(1 << n)
    .fill(0)
    .map(() => Array(n).fill(-1));

  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = words[i].length;
  }

  // dp transition
  for (let mask = 1; mask < 1 << n; mask++) {
    for (let i = 0; i < n; i++) {
      if (dp[mask][i] >= Infinity) continue;

      for (let j = 0; j < n; j++) {
        if (mask & (1 << j)) continue;

        const newMask = mask | (1 << j);
        const newLen = dp[mask][i] + words[j].length - overlap[i][j];

        if (dp[newMask][j] > newLen) {
          dp[newMask][j] = newLen;
          parent[newMask][j] = i;
        }
      }
    }
  }

  // optimal solution
  let minLen = Infinity;
  let last = -1;
  const fullMask = (1 << n) - 1;

  for (let i = 0; i < n; i++) {
    if (dp[fullMask][i] < minLen) {
      minLen = dp[fullMask][i];
      last = i;
    }
  }

  // reconstruct the superstring
  let mask = fullMask;
  const path: number[] = [last];

  while (mask !== (mask & -mask)) {
    const prev = parent[mask][last];
    path.push(prev);
    mask ^= 1 << last;
    last = prev;
  }

  path.reverse();

  // result string
  let result = words[path[0]];
  for (let i = 1; i < path.length; i++) {
    const currWord = words[path[i]];
    const ov = overlap[path[i - 1]][path[i]];
    result += currWord.substring(ov);
  }

  return result;
}

const words = ['catg', 'ctaagt', 'gcta', 'ttca', 'atgcatc'];
console.log(shortestSuperstring(words));
/* 
Example 1:

Input: words = ["alex","loves","leetcode"]
Output: "alexlovesleetcode"
Explanation: All permutations of "alex","loves","leetcode" would also be accepted.
Example 2:

Input: words = ["catg","ctaagt","gcta","ttca","atgcatc"]
Output: "gctaagttcatgcatc"
*/
