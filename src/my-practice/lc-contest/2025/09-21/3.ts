export function minSplitMerge(nums1: number[], nums2: number[]): number {
  const start = nums1.join(',');
  const target = nums2.join(',');

  if (start === target) return 0;

  const visited = new Set<string>();
  visited.add(start);

  const queue: [string, number][] = [[start, 0]];

  while (queue.length) {
    const [state, dist] = queue.shift();
    const arr = state.split(',').map(Number);
    const n = arr.length;

    for (let L = 0; L < n; L++) {
      for (let R = L; R < n; R++) {
        const removed = arr.slice(L, R + 1);
        const remain = arr.slice(0, L).concat(arr.slice(R + 1));

        for (let pos = 0; pos <= remain.length; pos++) {
          const newArr = remain.slice(0, pos).concat(removed, remain.slice(pos));
          const key = newArr.join(',');

          if (!visited.has(key)) {
            if (key === target) return dist + 1;
            visited.add(key);
            queue.push([key, dist + 1]);
          }
        }
      }
    }
  }

  return -1;
}
