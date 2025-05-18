export {};

async function main() {
  const v = 5;
  const graph = new Array(v).fill(0).map(() => new Array(v).fill(0));
  // vertex 0;
  graph[0][1] = 1;
  graph[0][4] = 1;

  // vertex 1
  graph[1][0] = 1;
  graph[1][4] = 1;
  graph[1][3] = 1;
  graph[1][2] = 1;

  // vertex 2
  graph[2][1] = 1;
  graph[2][3] = 1;

  // vertex 3
  graph[3][1] = 1;
  graph[3][2] = 1;
  graph[3][4] = 1;

  // vertex 4
  graph[4][0] = 1;
  graph[4][1] = 1;
  graph[4][3] = 1;

  console.log(graph);
}

main();
