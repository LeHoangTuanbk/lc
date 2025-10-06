export function minmaxGasDist(stations: number[], k: number) {
  let lo = 0,
    hi = stations.at(-1) - stations[0];
  const eps = 1e-6;

  const canAchieve = (D: number): boolean => {
    let count = 0;
    for (let i = 1; i < stations.length; i++) {
      const gap = stations[i] - stations[i - 1];
      count += Math.ceil(gap / D) - 1;
    }
    return count <= k;
  };

  while (hi - lo > eps) {
    const mid = (lo + hi) / 2;
    if (canAchieve(mid)) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  return hi;
}

/* 
Example 1:

Input: stations = [1,2,3,4,5,6,7,8,9,10], k = 9
Output: 0.50000
Example 2:

Input: stations = [23,24,36,39,46,56,57,65,84,98], k = 1
Output: 14.00000

*/
