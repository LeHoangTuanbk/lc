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

function solution() {
  const input = fs
    .readFileSync('src/das3/lesson9-bitmask-trie/live-coding/1/input.txt', 'utf8')
    .trim()
    .split('\n');
  let q = Number(input[0]);
  const trie = new BinaryTrie();
  trie.insert(0);

  let idx = 1;
  let output: string[] = [];

  while (idx <= q) {
    const [op, valStr] = input[idx].split(' ');
    const x = Number(valStr);

    if (op === '+') {
      trie.insert(x, 1);
    } else if (op === '-') {
      trie.insert(x, -1);
    } else {
      const ans = trie.query(x);
      output.push(ans.toString());
    }

    idx++;
  }

  fs.writeFileSync('src/das3/lesson9-bitmask-trie/live-coding/1/output.txt', output.join('\n'));
}

solution();
