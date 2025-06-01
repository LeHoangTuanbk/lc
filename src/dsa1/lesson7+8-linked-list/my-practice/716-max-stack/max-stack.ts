class MaxStack {
  constructor() {}
  push(value: number) {}

  pop() {}

  top() {}

  peekMax() {}

  popMax() {}
}

const stack = new MaxStack();
stack.push(5);
stack.push(1);
stack.push(5);
stack.top(); //-> 5
stack.popMax(); //-> 5
stack.top(); //-> 1
stack.peekMax(); //-> 5
stack.pop(); // -> 1
stack.top(); // -> 5
