export function findTheWinner(n: number, k: number): number {
  const players = Array.from({ length: n }, (_, i) => i + 1);
  let idx = 0;
  while (players.length > 1) {
    idx = (idx + k - 1) % players.length;
    players.splice(idx, 1);
  }
  return players[0];
}

const n = 5,
  k = 2;
console.log(findTheWinner(n, k));
