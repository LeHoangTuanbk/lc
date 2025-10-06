export function repeatedStringMatch(a: string, b: string): number {
  const minRepeat = Math.ceil(b.length / a.length);
  for (let k = minRepeat; k <= minRepeat + 2; k++) {
    const repeated = a.repeat(k);
    if (repeated.includes(b)) {
      return k;
    }
  }
  return -1;
}

/* 
Example 1:

Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
Example 2:

Input: a = "a", b = "aa"
Output: 2

*/
function numBusesToDestination(routes: number[][], source: number, target: number): number {
  if (source === target) return 0;

  const stopToRoutes = new Map<number, Set<number>>();
  for (let i = 0; i < routes.length; i++) {
    for (const stop of routes[i]) {
      if (!stopToRoutes.has(stop)) stopToRoutes.set(stop, new Set());
      stopToRoutes.get(stop).add(i);
    }
  }

  const visitedRoutes = new Set<number>();
  const visitedStops = new Set<number>([source]);
  const queue: [number, number][] = [];

  if (!stopToRoutes.has(source)) return -1;
  for (const route of stopToRoutes.get(source)) {
    queue.push([route, 1]);
    visitedRoutes.add(route);
  }

  while (queue.length > 0) {
    const [routeIndex, busesTaken] = queue.shift();
    for (const stop of routes[routeIndex]) {
      if (stop === target) return busesTaken;
      if (visitedStops.has(stop)) continue;
      visitedStops.add(stop);

      for (const nextRoute of stopToRoutes.get(stop) ?? []) {
        if (!visitedRoutes.has(nextRoute)) {
          visitedRoutes.add(nextRoute);
          queue.push([nextRoute, busesTaken + 1]);
        }
      }
    }
  }

  return -1;
}
