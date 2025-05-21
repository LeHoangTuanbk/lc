export function groupAnagrams(strs: string[]): string[][] {
  const groupMap = new Map<string, string[]>();
  function hash(s: string): string {
    const characters = s.split('');
    characters.sort();
    return characters.join('');
  }
  for (const str of strs) {
    const hashValue = hash(str);
    if (!groupMap.has(hashValue)) {
      groupMap.set(hashValue, []);
    }
    groupMap.get(hashValue)!.push(str);
  }
  return Array.from(groupMap.values());
}
