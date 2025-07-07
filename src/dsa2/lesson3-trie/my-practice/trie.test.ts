import { Trie } from './trie';

describe('Trie with TrieNode[26]', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('inserts and searches correctly', () => {
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
  });

  it('inserts multiple words', () => {
    trie.insert('app');
    trie.insert('apple');
    expect(trie.search('app')).toBe(true);
    expect(trie.search('apple')).toBe(true);
  });

  it('deletes words', () => {
    trie.insert('apple');
    trie.insert('app');
    expect(trie.delete('apple')).toBe(true);
    expect(trie.search('apple')).toBe(false);
    expect(trie.search('app')).toBe(true);

    expect(trie.delete('app')).toBe(true);
    expect(trie.search('app')).toBe(false);
  });

  it('returns false for deleting non-existent word', () => {
    expect(trie.delete('banana')).toBe(false);
  });
});
