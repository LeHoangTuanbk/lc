class TrieNode {
  cnt: number = 0;
  child: (TrieNode | null)[] = [null, null];
}

export class BinaryTrie {
  private root: TrieNode = new TrieNode();
  private readonly MAX_BIT = 29; // giống C++, int 30-bit

  // add number x (d = +1 để insert, d = -1 để remove)
  add(x: number, d: number = 1): void {
    let p = this.root;
    for (let i = this.MAX_BIT; i >= 0; i--) {
      const b = (x >> i) & 1;
      if (!p.child[b]) p.child[b] = new TrieNode();
      p = p.child[b]!;
      p.cnt += d;
    }
  }

  // query maximum XOR with x
  query(x: number): number {
    let p = this.root;
    let res = 0;

    for (let i = this.MAX_BIT; i >= 0; i--) {
      const b = (x >> i) & 1;
      const opp = b ^ 1;

      // giống C++:
      // if possible, đi nhánh opposite để maximize XOR
      if (p.child[opp] && p.child[opp]!.cnt > 0) {
        p = p.child[opp]!;
        res |= 1 << i; // bit này = 1
      } else if (p.child[b] && p.child[b]!.cnt > 0) {
        p = p.child[b]!;
      } else {
        break; // không còn số nào nữa
      }
    }

    return res;
  }
}
