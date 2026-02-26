export function asteroidCollision(asteroids: number[]): number[] {
  const st: number[] = [];
  const n = asteroids.length;
  for (let i = 0; i < n; i++) {
    const curr = asteroids[i];
    handleCollision(st, curr);
  }

  return st;
}

function handleCollision(st: number[], curr: number) {
  if (st.length === 0) {
    st.push(curr);
    return;
  }

  if (st.at(-1) < 0 && curr > 0) {
    st.push(curr);
    return;
  }

  if (st.at(-1) * curr > 0) {
    st.push(curr);
    return;
  }

  if (st.at(-1) > 0 && curr < 0) {
    const val = Math.abs(curr);
    if (val < st.at(-1)) return;
    if (val === st.at(-1)) {
      st.pop();
      return;
    }
    if (val > st.at(-1)) {
      st.pop();
      handleCollision(st, curr);
    }
  }
}

const asteroids = [-2, 2, 1, -2];
console.log(asteroidCollision(asteroids));
