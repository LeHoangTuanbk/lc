export class TrieNode {
  children: TrieNode[];
  isEndOfNode: boolean;
  constructor() {
    this.children = Array<TrieNode>(26).fill(null);
    this.isEndOfNode = false;
  }
}

// export class WordDictionary2 {
//   private root: TrieNode;
//   constructor() {
//     this.root = new TrieNode();
//   }

//   addWord(word: string): void {
//     let node = this.root;
//     for (const w of word) {
//       const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
//       if (node.children[idx] === null) {
//         node.children[idx] = new TrieNode();
//       }
//       node = node.children[idx];
//     }
//     node.isEndOfNode = true;
//     return;
//   }

//   search(word: string): boolean {
//     function searchHelper(node: TrieNode, currentIndex: number) {
//       if (currentIndex === word.length) {
//         return true;
//       }
//       if (word[currentIndex] === '.') {
//         for (const child of node.children) {
//           if (searchHelper(child, currentIndex + 1)) {
//             return true;
//           }
//         }
//       }

//       const sliceWord = word.slice(currentIndex);

//       for (const w of sliceWord) {
//         const idx = w.charCodeAt(0) - 97;
//         if (node.children[idx] === null) {
//           return false;
//         }
//         node = node.children[idx];
//       }

//       return node.isEndOfNode;
//     }

//     return searchHelper(this.root, 0);
//   }
// }

class WordDictionary {
  head: TrieNode;
  constructor() {
    this.head = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.head;
    for (const w of word) {
      const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isEndOfNode = true;
    return;
  }

  search(word: string): boolean {
    return this.searchAtIndex(this.head, 0, word);
  }

  private searchAtIndex(cur: TrieNode, idx: number, arr: string): boolean {
    const n = arr.length;
    if (idx >= n) {
      return cur.isEndOfNode;
    }

    if (arr[idx] === '.') {
      for (let i = 0; i < 26; i++) {
        if (cur.children[i] != null) {
          if (this.searchAtIndex(cur.children[i], idx + 1, arr)) {
            return true;
          }
        }
      }
      return false;
    }

    const cIdx = arr[idx].charCodeAt(0) - 'a'.charCodeAt(0);
    if (cur.children[cIdx] === null) {
      return false;
    }

    return this.searchAtIndex(cur.children[cIdx], idx + 1, arr);
  }
}
