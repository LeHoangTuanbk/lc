export function findRepeatedDnaSequences(s: string): string[] {
  const repeated = new Set<string>();
  const n = s.length;
  const seen = new Set<string>();
  for (let i = 0; i <= n - 10; i++) {
    const dna = s.slice(i, i + 10);
    if (seen.has(dna)) {
      repeated.add(dna);
    } else {
      seen.add(dna);
    }
  }
  return [...repeated];
}

const s1 = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
const s2 = 'AAAAAAAAAAAAA';
console.log(findRepeatedDnaSequences(s1));
console.log(findRepeatedDnaSequences(s2));
/* 
Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAA AAA AAA AAAA"
Output: ["AAAAAAAAAA"]
*/
