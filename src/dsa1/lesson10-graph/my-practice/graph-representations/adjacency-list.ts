class Graph {
  n: number;
  adjList: Record<number, Array<number>> = {};
  constructor(n: number) {
    this.n = n;
  }

  addEdge(src: number, dest: number) {
    if (!this.adjList[src]) {
      this.adjList[src] = [];
    }

    if (!this.adjList[dest]) {
      this.adjList[dest] = [];
    }

    this.adjList[src].push(dest);
    this.adjList[dest].push(src);
  }

  print() {
    console.log(this.adjList);
  }
}

const myGraph = new Graph(5);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 4);

myGraph.addEdge(1, 4);
myGraph.addEdge(1, 3);
myGraph.addEdge(3, 4);

myGraph.addEdge(1, 2);
myGraph.addEdge(2, 3);

myGraph.print();
