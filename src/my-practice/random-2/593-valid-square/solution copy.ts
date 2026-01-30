function dist(a: number[], b: number[]): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

export function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  const dists = [
    dist(p1, p2),
    dist(p1, p3),
    dist(p1, p4),
    dist(p2, p3),
    dist(p2, p4),
    dist(p3, p4),
  ];

  dists.sort((a, b) => a - b);

  // side length must be > 0
  if (dists[0] === 0) return false;

  // 4 equal sides
  for (let i = 0; i < 4; i++) {
    if (dists[i] !== dists[0]) return false;
  }

  // 2 equal diagonals
  return dists[4] === dists[5] && dists[4] === 2 * dists[0];
}
