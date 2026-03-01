function openLock(deadends: string[], target: string): number {
  const dead = new Array<boolean>(10000).fill(false);
  for (const d of deadends) dead[Number(d)] = true;

  if (dead[0]) return -1;

  const visited = new Array<boolean>(10000).fill(false);
  visited[0] = true;

  const queue: [number, number][] = [[0, 0]]; // [state, steps]
  const targetNum = Number(target);

  const bases = [1, 10, 100, 1000];

  while (queue.length) {
    const [num, step] = queue.shift()!;

    if (num === targetNum) return step;

    for (const base of bases) {
      const digit = Math.floor(num / base) % 10;

      for (const move of [1, -1]) {
        const nd = (digit + move + 10) % 10;
        const next = num + (nd - digit) * base;

        if (dead[next] || visited[next]) continue;

        visited[next] = true;
        queue.push([next, step + 1]);
      }
    }
  }

  return -1;
}
