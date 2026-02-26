function asteroidCollision(asteroids: number[]): number[] {
  const st: number[] = [];
  const n = asteroids.length;
  let i = 0;
  while (i < n) {
    const curr = asteroids[i];
    if (st.length === 0) {
      st.push(curr);
      i++;
      continue;
    }

    if (st.at(-1) < 0 && curr > 0) {
      st.push(curr);
      i++;
      continue;
    }

    if (st.at(-1) > 0 && curr < 0) {
      const val = Math.abs(curr);
      if (val === st.at(-1)) {
        i++;
        st.pop();
      } else if (val > st.at(-1)) {
        st.pop();
        while (st.at(-1) > 0 && curr < 0 && val > st.at(-1)) {
          st.pop();
        }
        if (!st.length || st.at(-1) < val) st.push(curr);
        i++;
      } else {
        i++;
      }
    } else {
      st.push(curr);
      i++;
    }
  }

  return st;
}

const asteroids = [-2, -2, 1, -2];
console.log(asteroidCollision(asteroids));
