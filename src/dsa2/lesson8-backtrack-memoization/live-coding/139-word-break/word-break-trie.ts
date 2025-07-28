class Trie {
  children: (Trie | null)[];
  isWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

export function wordBreak(s: string, wordDict: string[]): boolean {
  const head = new Trie();
  const n = s.length;

  // Build trie
  for (const word of wordDict) {
    let cur = head;
    for (const c of word) {
      const idx = c.charCodeAt(0) - 97;
      if (!cur.children[idx]) {
        cur.children[idx] = new Trie();
      }
      cur = cur.children[idx];
    }
    cur.isWord = true;
  }

  // backtrack + memoize
  const dp = Array(n).fill(-1);
  return dfs(0, s, head, dp);
}

function dfs(idx: number, s: string, head: Trie, dp: number[]): boolean {
  if (idx === s.length) return true;
  if (dp[idx] !== -1) return dp[idx] === 1;

  let cur = head;

  for (let i = idx; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    if (!cur.children[c]) break;

    cur = cur.children[c];
    if (cur.isWord && dfs(i + 1, s, head, dp)) {
      dp[idx] = 1;
      return true;
    }
  }

  dp[idx] = 0;
  return false;
}
