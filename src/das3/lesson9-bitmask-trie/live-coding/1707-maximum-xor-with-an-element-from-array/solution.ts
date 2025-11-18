class TrieNode {
  children: Array<TrieNode | null>;
  minVal: number;

  constructor() {
    this.children = [null, null];
    this.minVal = Infinity;
  }
}

class BinaryTrie {
  root: TrieNode;
  MAX_BIT = 30;

  constructor() {
    this.root = new TrieNode();
  }

  insert(x: number) {
    let node = this.root;
    node.minVal = Math.min(node.minVal, x);

    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      if (!node.children[b]) {
        node.children[b] = new TrieNode();
      }
      node = node.children[b];
      node.minVal = Math.min(node.minVal, x);
    }
  }

  query(x: number, m: number): number {
    let node = this.root;

    if (node.minVal > m) return -1;
    let res = 0;

    for (let i = this.MAX_BIT; i >= 0; i--) {
      const b = (x >> i) & 1;
      const opp = b ^ 1;

      if (node.children[opp] && node.children[opp].minVal <= m) {
        node = node.children[opp];
        res |= 1 << i;
      } else if (node.children[b] && node.children[b].minVal <= m) {
        node = node.children[b];
      } else {
        return -1;
      }
    }
    return res;
  }
}

export function maximizeXor(nums: number[], queries: number[][]): number[] {
  const trie = new BinaryTrie();
  for (const num of nums) {
    trie.insert(num);
  }
  let res: number[] = [];
  for (const [x, m] of queries) {
    res.push(trie.query(x, m));
  }
  return res;
}
