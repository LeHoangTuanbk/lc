function nextCharacter(s: string) {
  if (s === 'z') return 'a';
  return String.fromCharCode(s.charCodeAt(0) + 1);
}

function findKth(k: number, level: number): string {
  if (level === 0) return 'a';

  const mid = 1 << (level - 1);
  if (k <= mid) {
    return findKth(k, level - 1);
  } else {
    const prev = findKth(k - mid, level - 1);
    return nextCharacter(prev);
  }
}

export function kthCharacter(k: number): string {
  const level = Math.ceil(Math.log2(k));
  return findKth(k, level);
}

console.log(kthCharacter(5));
