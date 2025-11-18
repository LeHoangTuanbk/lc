class TrieNode {
  children: Array<TrieNode | null>;
  count: number;

  constructor() {
    this.children = [null, null];
    this.count = 0;
  }
}

class BinaryTrie {
  root: TrieNode;
  MAX_BIT = 30;

  constructor() {
    this.root = new TrieNode();
  }

  insert(x: number, d: number = 1) {
    let node = this.root;
    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      if (!node.children[b]) node.children[b] = new TrieNode();
      node = node.children[b];
      node.count += d;
    }
  }

  query(x: number): number {
    let p = this.root;
    let res = 0;
    for (let i = this.MAX_BIT; i >= 0; i--) {
      const b = (x >> i) & 1;
      const opp = b ^ 1;
      if (p.children[opp] && p.children[opp].count > 0) {
        p = p.children[opp];
        res |= 1 << i;
      } else if (p.children[b] && p.children[b].count > 0) {
        p = p.children[b];
      } else {
        break;
      }
    }

    return res;
  }
}

export function maximizeXor(nums: number[], queries: number[][]): number[] {
  nums.sort((a, b) => a - b);

  const indexedQueries = queries.map((q, idx) => [...q, idx]);
  indexedQueries.sort((a, b) => a[1] - b[1]);

  const n = queries.length;
  const res = Array<number>(n).fill(-1);
  const trie = new BinaryTrie();

  let numIndex = 0;

  for (let i = 0; i < n; i++) {
    const [x, m, originalIndex] = indexedQueries[i];

    while (numIndex < nums.length && nums[numIndex] <= m) {
      trie.insert(nums[numIndex]);
      numIndex++;
    }

    if (numIndex > 0) {
      res[originalIndex] = trie.query(x);
    } else {
      res[originalIndex] = -1;
    }
  }

  return res;
}

const nums = [5, 2, 4, 6, 6, 3],
  queries = [
    [12, 4],
    [8, 1],
    [6, 3],
  ];
console.log(maximizeXor(nums, queries));
