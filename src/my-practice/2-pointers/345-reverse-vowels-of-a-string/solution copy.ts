export function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U']);
  const arr = s.split('');
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join('');
}

const s = 'IceCreAm';
console.log(reverseVowels(s));
