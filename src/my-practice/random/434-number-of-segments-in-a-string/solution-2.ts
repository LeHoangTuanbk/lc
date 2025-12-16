export function countSegments(s: string): number {
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length === 0) return 0;
  return s.split(' ').length;
}
