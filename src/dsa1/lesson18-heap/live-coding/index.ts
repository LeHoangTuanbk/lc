import { PriorityQueue } from '@datastructures-js/priority-queue';

export class SeatManager {
  private minPQ: PriorityQueue<number>;
  constructor(n: number) {
    this.minPQ = new PriorityQueue<number>((a, b) => a - b);
    for (let i = 1; i <= n; i++) {
      this.minPQ.enqueue(i);
    }
  }

  reserve(): number {
    return this.minPQ.dequeue();
  }

  unreserve(seatNumber: number): void {
    this.minPQ.enqueue(seatNumber);
  }
}

/*
Example 1:

Input
["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
[[5], [], [], [2], [], [], [], [], [5]]
Output
[null, 1, 2, null, 2, 3, 4, 5, null]

Explanation
SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
seatManager.reserve();    // The only available seat is seat 5, so return 5.
seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].
*/
export class SeatManager1 {
  private minPQ: PriorityQueue<number>;

  constructor(n: number) {
    this.minPQ = new PriorityQueue<number>((a, b) => a - b); // min-heap
    for (let i = 1; i <= n; i++) {
      this.minPQ.enqueue(i); // ghế đánh số từ 1 đến n
    }
  }

  reserve(): number {
    return this.minPQ.dequeue(); // lấy ghế nhỏ nhất
  }

  unreserve(seatNumber: number): void {
    this.minPQ.enqueue(seatNumber); // trả ghế lại
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

function findKthLargest2(nums: number[], k: number): number {
  const minPQ = new PriorityQueue<number>((a, b) => a - b);

  for (const num of nums) {
    minPQ.enqueue(num);
    if (minPQ.size() > k) {
      minPQ.dequeue();
    }
  }

  return minPQ.front();
}

function findKthLargest2(nums: number[], k: number): number {
  const minQP = new PriorityQueue<number>((a, b) => a - b);
  for (const num of nums) {
    minQP.enqueue(num);
    if (minQP.size() > k) {
      minQP.dequeue();
    }
  }
  return minQP.front();
}

function getOrder(tasks: number[][]): number[] {
  const n = tasks.length;
  const arr: number[][] = Array.from({ length: n }, () => Array(3).fill(0));
  for (let i = 0; i < n; i++) {
    arr[i][0] = tasks[i][0];
    arr[i][1] = tasks[i][1];
    arr[i][2] = i;
  }

  tasks.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const minPQ = new PriorityQueue<[number, number]>((a, b) => {
    if (a[1] === b[1]) return a[2] - b[2];
    return a[1] - b[1];
  });

  let idx = 0,
    t = 0;
  const res = Array(n);
}

function assignTasks(servers: number[], tasks: number[]): number[] {
  // 0: index, 1: weight
  const serverHeap = new PriorityQueue((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  for (let i = 0; i < servers.length; i++) {
    serverHeap.enqueue([i, servers[i]]);
  }

  // 0: index, 1: time finish
  const workHeap = new PriorityQueue((a, b) => a[1] - b[1]);

  const n = tasks.length;
  let res: number[] = Array(n);
  let t = 0;
  for (let i = 0; i < n; i++) {
    t = serverHeap.isEmpty() ? Math.max(workHeap.front()[1], i) : Math.max(t, i);

    while (!workHeap.isEmpty() && workHeap.front()[1] <= t) {
      const idx = workHeap.dequeue()[0];
      serverHeap.enqueue([idx, servers[idx]]);
    }
    const server = serverHeap.dequeue();
    res[i] = server[0];
    workHeap.enqueue([server[0], t + tasks[i]]);
  }
  return res;
}

/* 
Example 1:

Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
Explanation: Events in chronological order go as follows:
- At second 0, task 0 is added and processed using server 2 until second 1.
- At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
- At second 2, task 2 is added and processed using server 0 until second 5.
- At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
- At second 4, task 4 is added and processed using server 1 until second 5.
- At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.
 */

/* 
Example 1:

Input: tasks = [[1,2],[2,4],[3,2],[4,1]]
Output: [0,2,3,1]

[[1,2],[2,4],[3,2],[4,1]]


Explanation: The events go as follows: 
- At time = 1, task 0 is available to process. Available tasks = {0}.
- Also at time = 1, the idle CPU starts processing task 0. Available tasks = {}.
- At time = 2, task 1 is available to process. Available tasks = {1}.
- At time = 3, task 2 is available to process. Available tasks = {1, 2}.
- Also at time = 3, the CPU finishes task 0 and starts processing task 2 as it is the shortest. Available tasks = {1}.
- At time = 4, task 3 is available to process. Available tasks = {1, 3}.
- At time = 5, the CPU finishes task 2 and starts processing task 3 as it is the shortest. Available tasks = {1}.
- At time = 6, the CPU finishes task 3 and starts processing task 1. Available tasks = {}.
- At time = 10, the CPU finishes task 1 and becomes idle.
*/
