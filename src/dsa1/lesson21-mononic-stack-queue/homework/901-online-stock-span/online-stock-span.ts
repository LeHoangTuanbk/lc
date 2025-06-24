export class StockSpanner2 {
  private nums: number[] = [];
  constructor() {}

  next(price: number): number {
    this.nums.push(price);
    let i = this.nums.length - 2;
    while (i >= 0) {
      if (this.nums[i] > price) {
        break;
      } else {
        i--;
      }
    }
    return this.nums.length - 1 - i;
  }
}

// compression counting
export class StockSpanner {
  private stack: [number, number][] = [];
  next(price: number): number {
    let span = 1;
    while (this.stack.length && this.stack.at(-1)[0] <= price) {
      const [_, preSpan] = this.stack.pop();
      span += preSpan;
    }
    this.stack.push([price, span]);
    return span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 * 
 * Example 1:
Step 2: 
[100], [80]
i = 0, 2-1-0 = 1

Step 1: [100], i = -1, 1-1 + 1 = 1
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]



Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6

 * 
 * 
 */
