import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

export function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1]);

  const maxHeap = new MaxPriorityQueue<number>();
  let totalTime = 0;

  for (const [duration, lastDay] of courses) {
    totalTime += duration;
    maxHeap.enqueue(duration);

    if (totalTime > lastDay) {
      totalTime -= maxHeap.dequeue();
    }
  }

  return maxHeap.size();
}
