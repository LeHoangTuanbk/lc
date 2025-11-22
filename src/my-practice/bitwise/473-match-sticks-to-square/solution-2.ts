function makesquare(matchsticks: number[]): boolean {
  const sum = matchsticks.reduce((s, a) => (s += a), 0);
  if (sum % 4 !== 0 || matchsticks.length < 4) {
    return false;
  }
  const target = sum / 4;

  matchsticks.sort((a, b) => b - a);

  if (matchsticks[0] > target) return false;

  const sides = [0, 0, 0, 0];

  function backtrack(i: number): boolean {
    if (i === matchsticks.length) return true;
    const len = matchsticks[i];

    for (let s = 0; s < 4; s++) {
      if (sides[s] + len > target) {
        continue;
      }
      sides[s] += len;
      if (backtrack(i + 1)) {
        return true;
      }
      sides[s] -= len;
      if (sides[s] === 0) {
        break;
      }
    }

    return false;
  }

  return backtrack(0);
}
