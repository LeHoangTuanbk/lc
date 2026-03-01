type LockState = {
  state: number[];
  step: number;
};

function openLock(deadends: string[], target: string): number {
  const lockState: number[] = [0, 0, 0, 0];
  const queue: LockState[] = [{ state: lockState, step: 0 }];
  const visited = new Set<string>(['0000']);
  const dead = new Set<string>(deadends);
  if (dead.has('0000')) return -1;

  while (queue.length) {
    const { state: curState, step } = queue.shift();
    const curStateString = curState.join('');
    if (dead.has(curStateString)) continue;
    if (target === curStateString) return step;
    for (let i = 0; i < 4; i++) {
      const nextCur = [...curState];
      nextCur[i] = (nextCur[i] + 1) % 10;
      if (!visited.has(nextCur.join(''))) {
        visited.add(nextCur.join(''));
        queue.push({ state: nextCur, step: step + 1 });
      }

      const nextCur2 = [...curState];
      nextCur2[i] = (nextCur2[i] - 1 + 10) % 10;
      if (!visited.has(nextCur2.join(''))) {
        visited.add(nextCur2.join(''));
        queue.push({ state: nextCur2, step: step + 1 });
      }
    }
  }

  return -1;
}

const visited = new Set<string>(['0000']);
console.log(visited);
