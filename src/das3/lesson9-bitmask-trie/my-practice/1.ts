import * as fs from 'fs';

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
  MAX_BIT = 30; // numbers <= 1e9 => bits 29..0

  constructor() {
    this.root = new TrieNode();
  }

  insert(x: number) {
    let node = this.root;
    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      if (!node.children[b]) node.children[b] = new TrieNode();
      node = node.children[b]!;
      node.count++;
    }
  }

  erase(x: number) {
    let node = this.root;
    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      node = node.children[b]!;
      node.count--;
    }
  }

  // max XOR query
  query(x: number): number {
    let node = this.root;
    let ans = 0;

    for (let bit = this.MAX_BIT; bit >= 0; bit--) {
      const b = (x >> bit) & 1;
      const want = b ^ 1; // opposite bit to maximize XOR

      // If opposite bit exists and count > 0, go there
      if (node.children[want] && node.children[want]!.count > 0) {
        ans |= 1 << bit;
        node = node.children[want]!;
      } else {
        // Otherwise must go to same bit
        node = node.children[b]!;
      }
    }

    return ans;
  }
}

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let q = Number(input[0]);

const trie = new BinaryTrie();
trie.insert(0); // initial multiset contains 0

let idx = 1;
let output: string[] = [];

while (idx <= q) {
  const [op, valStr] = input[idx].split(' ');
  const x = Number(valStr);

  if (op === '+') {
    trie.insert(x);
  } else if (op === '-') {
    trie.erase(x);
  } else {
    // "? x"
    const ans = trie.query(x);
    output.push(ans.toString());
  }

  idx++;
}

console.log(output.join('\n'));
