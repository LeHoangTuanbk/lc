export function countSegments(s: string): number {
  s = s.trim();
  if (s.length === 0) return 0;
  return s.split(/\s+/).length;
}
