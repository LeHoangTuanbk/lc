export function minimumCost2(cost: number[]): number {
  cost.sort((a, b) => a - b);
  let miniumBuyingCost = 0;
  let discounts = new Set();
  let i = cost.length - 1 - 2;
  while (i >= 0) {
    discounts.add(i);
    i -= 3;
  }
  for (let i = 0; i < cost.length; i++) {
    if (!discounts.has(i)) {
      miniumBuyingCost += cost[i];
    }
  }
  return miniumBuyingCost;
}

export function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let miniumBuyingCost = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 != 0) {
      miniumBuyingCost += cost[i];
    }
  }
  return miniumBuyingCost;
}
