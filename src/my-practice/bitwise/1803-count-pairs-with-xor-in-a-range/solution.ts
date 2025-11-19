class TrieNode {
  count = 0;
  children: Array<TrieNode | null> = [null, null];
}

class BinaryTrie {
  static readonly MAX_BIT = 15;
  root = new TrieNode();

  insert(x: number) {
    let node = this.root;
    for (let bit = BinaryTrie.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      if (!node.children[b]) node.children[b] = new TrieNode();
      node = node.children[b];
      node.count++;
    }
  }

  countLessThan(x: number, K: number): number {
    let node = this.root;
    let ans = 0;

    for (let bit = BinaryTrie.MAX_BIT; bit >= 0; bit--) {
      if (!node) break;

      const xb = (x >> bit) & 1;
      const kb = (K >> bit) & 1;

      if (kb === 1) {
        const same = node.children[xb];
        if (same) ans += same.count;

        node = node.children[xb ^ 1];
      } else {
        node = node.children[xb];
      }
    }

    return ans;
  }
}

function countPairsLessThan(nums: number[], K: number): number {
  if (K <= 0) return 0;

  const trie = new BinaryTrie();
  let res = 0;

  for (const x of nums) {
    res += trie.countLessThan(x, K);
    trie.insert(x);
  }
  return res;
}

export function countPairs(nums: number[], low: number, high: number): number {
  return countPairsLessThan(nums, high + 1) - countPairsLessThan(nums, low);
}
