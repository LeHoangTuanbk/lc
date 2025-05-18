export function timeRequiredToBuy2(tickets: number[], k: number): number {
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

export function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  const target = tickets[k];
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) time += Math.min(tickets[i], target);
    else time += Math.min(tickets[i], target - 1);
  }
  return time;
}
