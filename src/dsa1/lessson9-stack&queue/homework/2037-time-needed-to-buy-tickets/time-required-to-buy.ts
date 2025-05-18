export function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  while (true) {
    const front = tickets.shift()!;
    time++;

    if (k === 0) {
      if (front === 1) return time;
      else k = tickets.length;
    } else {
      k--;
    }

    if (front > 1) tickets.push(front - 1);
  }
}
