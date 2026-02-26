export function asteroidCollision(asteroids: number[]): number[] {
  const st: number[] = [];
  for (const curr of asteroids) {
    let alive = true;
    while (alive && st.length && st.at(-1) > 0 && curr < 0) {
      const top = st.at(-1);

      if (Math.abs(curr) > top) {
        st.pop();
        continue;
      }

      if (Math.abs(curr) === top) {
        st.pop();
      }
      alive = false;
    }

    if (alive) {
      st.push(curr);
    }
  }
  return st;
}

const asteroids = [-2, 2, 1, -2];
console.log(asteroidCollision(asteroids));
