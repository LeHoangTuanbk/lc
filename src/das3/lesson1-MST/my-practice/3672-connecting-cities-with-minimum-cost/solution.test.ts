import { minimumCostToConnectCities } from './solution';
import type { Edge } from './solution';

describe('Connecting Cities with Minimum Cost', () => {
  it('Example 1: all cities can be connected', () => {
    const n = 3;
    const connections: Edge[] = [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 3],
    ];
    expect(minimumCostToConnectCities(n, connections)).toBe(3);
  });

  it('Example 2: disconnected graph', () => {
    const n = 3;
    const connections: Edge[] = [[1, 2, 1]];
    expect(minimumCostToConnectCities(n, connections)).toBe(-1);
  });

  it('Single city (trivial case)', () => {
    const n = 1;
    const connections: Edge[] = [];
    expect(minimumCostToConnectCities(n, connections)).toBe(0);
  });

  it('Already minimum spanning', () => {
    const n = 4;
    const connections: Edge[] = [
      [1, 2, 1],
      [2, 3, 2],
      [3, 4, 3],
      [4, 1, 4],
      [1, 3, 10], // redundant
    ];
    expect(minimumCostToConnectCities(n, connections)).toBe(6); // edges 1-2, 2-3, 3-4
  });

  it('Fully disconnected nodes', () => {
    const n = 4;
    const connections: Edge[] = [[1, 2, 1]];
    expect(minimumCostToConnectCities(n, connections)).toBe(-1);
  });

  it('Multiple components, only one possible MST', () => {
    const n = 5;
    const connections: Edge[] = [
      [1, 2, 2],
      [2, 3, 3],
      [4, 5, 4],
    ];
    expect(minimumCostToConnectCities(n, connections)).toBe(-1);
  });
});
