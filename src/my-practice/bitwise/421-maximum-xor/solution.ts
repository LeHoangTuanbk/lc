class TrieNode {
  children: Array<TrieNode | null> = [null, null];
}

class BinaryTrie {
  root: TrieNode;
  MAX_BITS = 30;
  constructor() {
    this.root = new TrieNode();
  }
  insert(num: number) {
    let node = this.root;
    for (let i = this.MAX_BITS; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!node.children[bit]) node.children[bit] = new TrieNode();
      node = node.children[bit];
    }
  }

  queryMaxXor(num: number): number {
    let node = this.root;
    let xorVal = 0;

    for (let i = this.MAX_BITS; i >= 0; i--) {
      let bit = (num >> i) & 1;
      const preferred = bit ^ 1;

      if (node.children[preferred]) {
        xorVal |= 1 << i;
        node = node.children[preferred];
      } else {
        node = node.children[bit];
      }
    }

    return xorVal;
  }
}

export function findMaximumXOR(nums: number[]): number {
  const trie = new BinaryTrie();
  let ans = 0;
  trie.insert(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    ans = Math.max(ans, trie.queryMaxXor(num));
    trie.insert(num);
  }
  return ans;
}

const nums = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(nums));
