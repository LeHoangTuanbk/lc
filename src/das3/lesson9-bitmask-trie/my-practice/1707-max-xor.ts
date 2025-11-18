type Query = [x: number, m: number, idx: number];

class TrieNode {
  children: Array<TrieNode | null>;
  constructor() {
    this.children = [null, null];
  }
}

class BinaryTrie {
  private root: TrieNode = new TrieNode();
  private readonly MAX_BIT = 31;

  insert(num: number) {
    let node = this.root;
    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (num >> bit) & 1;
      if (!node.children[b]) node.children[b] = new TrieNode();
      node = node.children[b]!;
    }
  }

  query(x: number): number {
    let node = this.root;
    let res = 0;

    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      const want = b ^ 1;

      if (node.children[want]) {
        res |= 1 << bit;
        node = node.children[want]!;
      } else if (node.children[b]) {
        node = node.children[b]!;
      } else {
        // không có nhánh nào → không exist
        return -1;
      }
    }

    return res;
  }
}

export function maximizeXor(nums: number[], queries: number[][]): number[] {
  nums.sort((a, b) => a - b);

  const offline: Query[] = [];
  const n = queries.length;
  const ans = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const [x, m] = queries[i];
    offline.push([x, m, i]);
  }

  // sort query theo m tăng dần
  offline.sort((a, b) => a[1] - b[1]);

  const trie = new BinaryTrie();
  let idx = 0; // pointer cho nums

  for (const [x, m, qi] of offline) {
    // insert tất cả nums[j] ≤ m
    while (idx < nums.length && nums[idx] <= m) {
      trie.insert(nums[idx]);
      idx++;
    }

    // nếu chưa insert số nào → không có y ≤ m
    if (idx === 0) {
      ans[qi] = -1;
    } else {
      ans[qi] = trie.query(x);
    }
  }

  return ans;
}
