export function getProbability(balls: number[]): number {
  const totalBalls = balls.reduce((sum, b) => sum + b, 0);
  const n = totalBalls / 2;
  const k = balls.length;

  const fact: number[] = Array(totalBalls + 1).fill(1);
  for (let i = 2; i <= totalBalls; i++) {
    fact[i] = fact[i - 1] * i;
  }

  function combination(n: number, k: number): number {
    if (k < 0 || k > n) return 0;
    return fact[n] / (fact[k] * fact[n - k]);
  }

  const memo = new Map<string, [number, number]>();

  function dfs(
    idx: number,
    ball1Count: number,
    color1Count: number,
    color2Count: number,
  ): [number, number] {
    const key = `${idx},${ball1Count},${color1Count},${color2Count}`;
    if (memo.has(key)) return memo.get(key);

    if (idx === k) {
      if (ball1Count !== n) {
        memo.set(key, [0, 0]);
        return [0, 0];
      }
      const favorable = color1Count === color2Count ? 1 : 0;
      memo.set(key, [favorable, 1]);
      return [favorable, 1];
    }

    let totalFav = 0;
    let totalWays = 0;

    for (let x = 0; x <= balls[idx]; x++) {
      if (ball1Count + x > n) break;

      const newColor1 = color1Count + (x > 0 ? 1 : 0);
      const newColor2 = color2Count + (balls[idx] - x > 0 ? 1 : 0);

      const ways = combination(balls[idx], x);
      const [fav, tot] = dfs(idx + 1, ball1Count + x, newColor1, newColor2);

      totalFav += ways * fav;
      totalWays += ways * tot;
    }

    memo.set(key, [totalFav, totalWays]);
    return [totalFav, totalWays];
  }

  const [favorable, total] = dfs(0, 0, 0, 0);
  return favorable / total;
}

const balls = [1, 2, 1, 2];
console.log(getProbability(balls));
