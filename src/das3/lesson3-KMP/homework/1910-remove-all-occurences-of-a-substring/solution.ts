export function removeOccurrences2(s: string, part: string): string {
  const index = s.indexOf(part);
  if (index === -1) return s;
  else return removeOccurrences(s.slice(0, index) + s.slice(index + part.length), part);
}

function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }
  return s;
}
const s = 'daabcbaabcbc',
  part = 'abc';

console.log(removeOccurrences(s, part));
