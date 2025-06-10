// lc heap: https://github.com/datastructures-js/priority-queue/tree/fb4fdb984834421279aeb081df7af624d17c2a03

import {
  MinPriorityQueue,
  MaxPriorityQueue,
  PriorityQueue,
} from '@datastructures-js/priority-queue';

const numbers = [3, 5, 6, 0, -1];
const qp = new MinPriorityQueue<number>({ compare: (a, b) => a - b });

numbers.forEach((num) => qp.enqueue(num));

// console.log(qp.front());

// while (!qp.isEmpty()) {
//   console.log(qp.dequeue()); // -1, 0, 3, 5, 6
// }

// const maxPQ = new MaxPriorityQueue<number>({ compare: (a, b) => a - b });

// numbers.forEach((num) => maxPQ.enqueue(num));
// console.log(maxPQ);
// console.log(maxPQ.size());
// console.log(maxPQ.toArray());

// while (!maxPQ.isEmpty()) {
//   console.log(maxPQ.dequeue());
// }

type Task = {
  name: string;
  deadline: number;
};

const minPQ = new MinPriorityQueue<Task>({ compare: (a, b) => a.deadline - b.deadline });

const tasks: Task[] = [
  {
    name: 'Practice Heap',
    deadline: 10,
  },
  {
    name: 'Practice DP',
    deadline: 20,
  },
  {
    name: 'Practice Dijitra',
    deadline: 30,
  },
  {
    name: 'Yoga',
    deadline: 3,
  },
];

for (const task of tasks) {
  minPQ.enqueue(task);
}

while (!minPQ.isEmpty()) {
  console.log(minPQ.dequeue());
}

// function findKthLargest(nums: number[], k: number): number {
//   const maxPQ = new MaxPriorityQueue<number>({
//     compare: (a, b) => a - b,
//   });
//   for (const num of nums) {
//     maxPQ.enqueue(num);
//     if (maxPQ.size() > k) {
//       maxPQ.dequeue();
//     }
//   }
//   return maxPQ.front();
// }

function findKthLargest2(nums: number[], k: number): number {
  const pq = new PriorityQueue<number>((a, b) => a - b);
  const minPQ = pq;

  for (const num of nums) {
    minPQ.enqueue(num);
    if (minPQ.size() > k) {
      minPQ.dequeue(); // loại bỏ phần tử nhỏ nhất trong heap
    }
  }

  return minPQ.front(); // phần tử nhỏ nhất trong top k phần tử lớn nhất
}

function findKthLargest(nums: number[], k: number): number {
  const minPQ = new MinPriorityQueue<number>({ priority: a });

  for (const num of nums) {
    minPQ.enqueue(num);
    if (minPQ.size() > k) {
      minPQ.dequeue(); // loại bỏ phần tử nhỏ nhất trong heap
    }
  }

  return minPQ.front(); // phần tử nhỏ nhất trong top k phần tử lớn nhất
}
