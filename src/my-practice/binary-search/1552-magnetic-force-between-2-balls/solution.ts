function canPlace(position: number[], m: number, minDist: number): boolean {
  let last = position[0];
  let count = 1;
  for (let i = 1; i < position.length; i++) {
    if (position[i] - last >= minDist) {
      count++;
      last = position[i];
      if (count >= m) return true;
    }
  }
  return false;
}

export function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);
  let lo = 1,
    hi = position.at(-1) - position[0];

  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canPlace(position, m, mid)) lo = mid;
    else {
      hi = mid - 1;
    }
  }
  return lo;
}

const position = [1, 2, 3, 4, 7],
  m = 3;
console.log(maxDistance(position, m));
