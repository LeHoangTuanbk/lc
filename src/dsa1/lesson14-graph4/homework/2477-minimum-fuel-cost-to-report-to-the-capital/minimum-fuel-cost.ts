export function minimumFuelCost(roads: number[][], seats: number): number {
  const n = roads.length + 1;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const visited = Array(n).fill(false);

  for (const [u, v] of roads) {
    graph[u].push(v);
    graph[v].push(u);
  }

  function dfs(cur: number) {
    visited[cur] = true;
    let numberOfLitersToCur = 0;
    let numberOfPeople = 1;
    for (const u of graph[cur]) {
      if (visited[u]) {
        continue;
      }
      const { people, numberOfLiters } = dfs(u);
      numberOfLitersToCur += numberOfLiters + Math.ceil(people / seats);
      numberOfPeople += people;
    }
    return {
      people: numberOfPeople,
      numberOfLiters: numberOfLitersToCur,
    };
  }

  return dfs(0).numberOfLiters;
}

// const roads = [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//   ],
//   seats = 5;
// const expectedOutput = 3;
// minimumFuelCost(roads, seats);
