function dfs(cur: number, rooms: number[][], visited: boolean[]) {
  visited[cur] = true;
  for (const u of rooms[cur]) {
    if (visited[u]) {
      continue;
    }
    dfs(u, rooms, visited);
  }
}

export function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  const visited: boolean[] = Array(n).fill(false);
  dfs(0, rooms, visited);
  for (const value of visited) {
    if (!value) return false;
  }
  return true;
}

/*
Input: rooms = [[1],[2],[3],[]]
Output: true
*/
