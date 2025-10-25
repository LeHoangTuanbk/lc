import { MinPriorityQueue } from '@datastructures-js/priority-queue';

class Graph {
  private graph: Map<number, [number, number][]>;
  constructor(n: number, edges: number[][]) {
    this.graph = new Map();
    for (let i = 0; i < n; i++) this.graph.set(i, []);
    for (const [u, v, w] of edges) {
      this.graph.get(u).push([v, w]);
    }
  }

  addEdge(edge: number[]): void {
    const [u, v, w] = edge;
    this.graph.get(u).push([v, w]);
  }

  shortestPath(node1: number, node2: number): number {
    const dist = new Map<number, number>();
    const pq = new MinPriorityQueue<[number, number]>((x) => x[0]);
    pq.enqueue([0, node1]);
    dist.set(node1, 0);

    while (!pq.isEmpty()) {
      const [cost, u] = pq.dequeue();
      if (dist.get(u) < cost) continue;

      if (u == node2) return cost;

      for (const [v, w] of this.graph.get(u)) {
        const newCost = cost + w;
        if (!dist.has(v) || dist.get(v) > newCost) {
          dist.set(v, newCost);
          pq.enqueue([newCost, v]);
        }
      }
    }
    return -1;
  }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
