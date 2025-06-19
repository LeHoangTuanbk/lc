export function canCompleteCircuit2(gas: number[], cost: number[]): number {
  const leftGas: number[] = [];
  const n = gas.length;

  for (let i = 0; i < n; i++) {
    leftGas.push(gas[i] - cost[i]);
  }

  let sumleftGas = 0;
  for (let i = 0; i < n; i++) {
    sumleftGas += leftGas[i];
  }
  if (sumleftGas < 0) return -1;

  for (let i = 0; i < n; i++) {
    if (leftGas[i] >= 0) {
      const res = checkCanComplete(i);
      if (res !== -1) {
        return res;
      }
    }
  }

  return -1;

  function checkCanComplete(i: number): number {
    // right sum
    let sum = 0;
    let j = i;
    while (j < n) {
      sum += leftGas[j];
      if (sum < 0) return -1;
      j++;
    }
    let k = 0;
    while (k <= i) {
      sum += leftGas[k];
      if (sum < 0) return -1;
      k++;
    }
    if (sum < 0) return -1;
    return i;
    // left sum
  }
}

const gas = [2, 3, 4];
const cost = [3, 4, 3];
const expectedOutput = -1;
canCompleteCircuit(gas, cost);
/* 

Example 1:

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

gas - cost: [-2, -2, -2, 3, 3]



Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
{
      const gas = [2, 3, 4];
      const cost = [3, 4, 3];
leftgas = [-1, -1, 1]

Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

*/
export function canCompleteCircuit3(gas: number[], cost: number[]): number {
  const n = gas.length;
  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total < 0 ? -1 : start;
}

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total < 0 ? -1 : start;
}
