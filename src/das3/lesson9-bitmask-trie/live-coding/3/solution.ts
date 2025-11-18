/* 
De max and va xor thi 2 bien a[i] va a[j] phai bang nhau. 

*/

class TrieNode {
  child: (TrieNode | null)[] = [null, null];
  index: number = -1; // lưu index của số kết thúc tại node lá
}

export function lisaMartians(a: number[], k: number) {
  const n = a.length;
  const MAX_BIT = k - 1;

  // ---- Binary Trie ----
  const root = new TrieNode();

  const insert = (x: number, idx: number) => {
    let p = root;
    for (let b = MAX_BIT; b >= 0; b--) {
      const bit = (x >> b) & 1;
      if (!p.child[bit]) p.child[bit] = new TrieNode();
      p = p.child[bit]!;
    }
    p.index = idx;
  };

  const query = (x: number) => {
    let p = root;
    if (!p.child[0] && !p.child[1]) return null; // trie empty

    for (let b = MAX_BIT; b >= 0; b--) {
      const bit = (x >> b) & 1;
      // để minimize XOR, đi cùng hướng bit trước
      const preferred = bit;
      if (p.child[preferred]) {
        p = p.child[preferred]!;
      } else {
        p = p.child[preferred ^ 1]!;
      }
    }
    return p.index;
  };

  // ---- Find best pair (i,j) minimizing XOR ----
  let bestXor = Infinity;
  let bestI = 0,
    bestJ = 0;

  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const candidate = query(a[i]);
      if (candidate !== null) {
        const val = a[i] ^ a[candidate];
        if (val < bestXor) {
          bestXor = val;
          bestI = i;
          bestJ = candidate;
        }
      }
    }
    insert(a[i], i);
  }

  // ---- Construct x (bật các bit nơi ai == aj) ----
  const ai = a[bestI],
    aj = a[bestJ];
  let x = 0;

  for (let b = 0; b < k; b++) {
    const bi = (ai >> b) & 1;
    const bj = (aj >> b) & 1;
    if (bi === bj) {
      x |= (bi ^ 1) << b; // chọn x[b] = NOT(bi)
    }
  }

  return {
    i: bestI + 1,
    j: bestJ + 1,
    x,
  };
}
