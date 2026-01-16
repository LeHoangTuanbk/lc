/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
  private stack: NestedIterator[];

  constructor(nestedList: NestedInteger[]) {
    this.stack = [];
    for (let i = nestedList.length - 1; i >= 0; i--) {
      this.stack.push(nestedList[i]);
    }
  }

  hasNext(): boolean {
    while (this.stack.length > 0) {
      const top = this.stack.at(-1);

      if (top.isInteger()) {
        return true;
      }

      this.stack.pop();
      const list = top.getList();
      for (let i = list.length - 1; i >= 0; i--) {
        this.stack.push(list[i]);
      }
    }
    return false;
  }

  next(): number {
    this.hasNext();
    return this.stack.pop().getInteger();
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
