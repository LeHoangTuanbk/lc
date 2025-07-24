export function numRescueBoats(people: number[], limit: number): number {
  let n = people.length;
  let left = 0,
    right = n - 1,
    res = 0,
    currentSum;
  people.sort((a, b) => a - b);

  while (left < right) {
    currentSum = people[left] + people[right];
    if (currentSum <= limit) {
      left++;
    }
    right--;
    res++;
  }

  return left === right ? res + 1 : res;
}

export function numRescueBoats2(people: number[], limit: number): number {
  let left = 0,
    right = people.length - 1,
    res = 0;
  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    res++;
  }

  return res;
}

const people = [3, 5, 2, 4], // 2 3 4 5
  limit = 5;
console.log(numRescueBoats(people, limit)); // 4
/* 
Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

[3,2,3,1] limit = 3 => 3
[1,2,3,3,4] limit : 6. 

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/
