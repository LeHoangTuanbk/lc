class TrieNode {
  children: (TrieNode | null)[];
  index: number;

  constructor() {
    this.children = [null, null];
    this.index = -1;
  }
}

export function findMaximumAnd(
  t: number,
  testCases: [number, number, number[]][],
): [number, number, number][] {
  const results: [number, number, number][] = [];

  for (let caseIdx = 0; caseIdx < t; caseIdx++) {
    const [n, k, a] = testCases[caseIdx];

    const root = new TrieNode();
    let bestI = -1,
      bestJ = -1,
      bestX = -1,
      bestVal = -1;

    // Thêm a[0] vào trie
    addToTrie(root, a[0], 0, k);

    for (let i = 1; i < n; i++) {
      // Tìm số trong trie có giá trị GẦN GIỐNG a[i] nhất
      const [j, commonBits] = findClosest(root, a[i], k);

      // Tính x để maximize (a[i] XOR x) & (a[j] XOR x)
      // x nên được chọn sao cho các bit mà CẢ a[i] và a[j] đều có 1 sẽ thành 0 sau XOR
      // và các bit mà ít nhất một trong hai có 0 sẽ thành 1
      let x = 0;
      for (let bitPos = k - 1; bitPos >= 0; bitPos--) {
        const bitI = (a[i] >> bitPos) & 1;
        const bitJ = (a[j] >> bitPos) & 1;

        if (bitI === 1 && bitJ === 1) {
          // Cả hai đều có bit 1 → giữ nguyên (XOR 0)
          x |= 0;
        } else {
          // Ít nhất một số có bit 0 → đảo bit (XOR 1)
          x |= 1 << bitPos;
        }
      }

      // Tính giá trị thực tế
      const val = (a[i] ^ x) & (a[j] ^ x);

      if (val > bestVal) {
        bestI = i + 1;
        bestJ = j + 1;
        bestX = x;
        bestVal = val;
      }

      addToTrie(root, a[i], i, k);
    }

    results.push([bestI, bestJ, bestX]);
  }

  return results;
}

function addToTrie(root: TrieNode, num: number, index: number, k: number): void {
  let node = root;
  for (let i = k - 1; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!node.children[bit]) {
      node.children[bit] = new TrieNode();
    }
    node = node.children[bit]!;
  }
  node.index = index;
}

function findClosest(root: TrieNode, num: number, k: number): [number, number] {
  let node = root;
  let commonBits = 0;

  for (let i = k - 1; i >= 0; i--) {
    const bit = (num >> i) & 1;

    // Ưu tiên đi theo bit GIỐNG để tìm số gần giống nhất
    if (node.children[bit]) {
      node = node.children[bit]!;
      commonBits |= 1 << i; // Bit này giống nhau
    } else if (node.children[bit ^ 1]) {
      node = node.children[bit ^ 1]!;
      // Không thêm vào commonBits vì bit khác nhau
    } else {
      break;
    }
  }

  return [node.index, commonBits];
}

// Test
const t = 1;
const testCases: [number, number, number[]][] = [
  [5, 4, [3, 9, 1, 4, 13]], // 3=0011, 5=0101, 6=0110
];

const results = findMaximumAnd(t, testCases);
results.forEach(([i, j, x]) => {
  console.log(`${i} ${j} ${x}`);
});
