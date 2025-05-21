import { groupAnagrams } from './group-anagrams';

function normalize(groups: string[][]): string[][] {
  return groups.map((group) => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}

describe('groupAnagrams', () => {
  test('Basic test case', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test('Empty input', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  test('Single word', () => {
    expect(groupAnagrams(['abc'])).toEqual([['abc']]);
  });

  test('All anagrams', () => {
    const input = ['abc', 'bca', 'cab', 'cba'];
    const expected = [['abc', 'bca', 'cab', 'cba']];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test('No anagrams', () => {
    const input = ['abc', 'def', 'ghi'];
    const expected = [['abc'], ['def'], ['ghi']];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });
});
