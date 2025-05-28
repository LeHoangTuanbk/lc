export function canVisitAllRooms2(rooms: number[][]): boolean {
  const n = rooms.length;
  const visited: boolean[] = Array(n).fill(false);
  function dfs(keys: number[]) {
    for (const key of keys) {
      if (!visited[key]) {
        visited[key] = true;
        dfs(rooms[key]);
      }
    }
  }
  dfs(rooms[0]);
  visited[0] = true;

  for (const value of visited) {
    if (!value) return false;
  }
  return true;
}

// export function canVisitAllRooms2(rooms: number[][]): boolean {
//   function dfs(cur: number, rooms: number[][]) {}

//   const n = rooms.length;
// }

// export function findCircleNum2(isConnected: number[][]): number {
//   const edgesLists : number[][];
//   for(const connected of isConnected) {
//     for(let i = 0; i < connected.length; i++) {

//     }
//   }
//   const n = isConnected.length;
//   const visit = Array(n).fill(false);
//   function dfs(cur: number, nodes: number[], visited: boolean[]) {}
//   for (const edgeList of isConnected) {
//     if(!visit)
//   }
// }

// export function findCircleNum(isConnected: number[][]): number {
//   const n = isConnected.length;
//   const visit = Array(n).fill(false);
//   let res = 0

//   function dfs(cur: number, isConnected : number[][])

//   for(let i = 0; i< n;i++) {
//     if(!visit[i]){
//       res++;
//       //dfs
//     }
//   }
// }

function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const vis: boolean[] = Array(n).fill(false);
  const path: boolean[] = Array(n).fill(false);

  function dfs(cur: number, graph: number[][], vis: boolean[], path: boolean[]): boolean {
    vis[cur] = true;
    path[cur] = true;
    for (const u of graph[cur]) {
      if (!vis[u]) {
        if (!dfs(u, graph, vis, path)) {;
        return false;
      } else if (path[u]) {
        return false;
      }
    }
    path[cur] = false;
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (vis[i]) {
      continue;
    }
    dfs(i, graph, vis, path)
  }
const res : number[]= []
  return res;
}


function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const colors : number[] = Array(n).fill(0); // 0, 1, 2

  function dfs(cur: number, colors: number[, graph: number[][], color: number[]]): boolean {
    

  }
    
};