class TrieNode {
  count: number;
  children: (TrieNode | null)[];

  constructor() {
    this.count = 0;
    this.children = [null, null];
  }
}

export function countPairs(nums: number[], low: number, high: number): number {
  const root = new TrieNode();

  const insert = (num: number) => {
    let node = root;
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (node.children[bit] === null) {
        node.children[bit] = new TrieNode();
      }
      node = node.children[bit]!;
      node.count++;
    }
  };

  const countXORLessEqual = (num: number, limit: number): number => {
    let count = 0;
    let node = root;

    for (let i = 31; i >= 0; i--) {
      if (node === null) break;

      const bitNum = (num >> i) & 1;
      const bitLimit = (limit >> i) & 1;

      if (bitLimit === 1) {
        // All numbers with opposite bit will have XOR < limit
        if (node.children[bitNum] !== null) {
          count += node.children[bitNum]!.count;
        }
        // Move to same bit for potential exact matches
        node = node.children[1 - bitNum];
      } else {
        // Must follow same bit to keep XOR <= limit
        node = node.children[bitNum];
      }
    }

    // Add exact match if we reached the end
    if (node !== null) {
      count += node.count;
    }

    return count;
  };

  // Insert all numbers first
  for (const num of nums) {
    insert(num);
  }

  const countAllPairs = (limit: number): number => {
    let total = 0;
    for (const num of nums) {
      total += countXORLessEqual(num, limit);
    }
    return total / 2; // Each pair counted twice
  };

  return countAllPairs(high) - countAllPairs(low - 1);
}
