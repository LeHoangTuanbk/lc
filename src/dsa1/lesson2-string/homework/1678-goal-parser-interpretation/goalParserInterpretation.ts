//Solution 1: Regex, Time : O(n + m)
export function interpretRegexSolution(command: string): string {
  return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
}

//Solution 2: For loop, check string (), G, (al) , Time: O(n)
export function interpret(command: string): string {
  let result: string[] = new Array(command.length);
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result.push(command[i]);
      continue;
    }
    if (command[i] === ')') {
      if (command[i - 1] === '(') {
        result.push('o');
      } else {
        result.push('al');
      }
    }
  }
  return result.join('');
}
