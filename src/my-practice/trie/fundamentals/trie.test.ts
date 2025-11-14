import { Trie } from './';

describe('Trie Fundamentals', () => {
  test('insert + search basic words', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');

    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(true);
    expect(trie.search('ap')).toBe(false);
  });

  test('startsWith should work', () => {
    const trie = new Trie();
    trie.insert('apple');

    expect(trie.startsWith('app')).toBe(true);
    expect(trie.startsWith('ap')).toBe(true);
    expect(trie.startsWith('b')).toBe(false);
  });

  test('search should return false if only prefix', () => {
    const trie = new Trie();
    trie.insert('app');

    expect(trie.search('ap')).toBe(false);
  });
});
