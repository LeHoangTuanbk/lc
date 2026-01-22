export function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length;
  const color = new Array<number>(n).fill(0); // 0: unvisited, 1: visiting, 2: done

  const nextIndex = (i: number): number => {
    return (((i + nums[i]) % n) + n) % n;
  };

  const dfs = (u: number): boolean => {
    if (color[u] === 2) return false;
    if (color[u] === 1) return true;

    color[u] = 1;
    const v = nextIndex(u);

    if (v === u || nums[v] * nums[u] < 0) {
      color[u] = 2;
      return false;
    }

    if (dfs(v)) return true;

    color[u] = 2;
    return false;
  };

  for (let i = 0; i < n; i++) {
    if (color[i] === 0 && dfs(i)) {
      return true;
    }
  }

  return false;
}

const nums = [2, -1, 1, 2, 2];
console.log(circularArrayLoop(nums));
