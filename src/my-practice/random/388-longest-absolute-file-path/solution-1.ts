export function lengthLongestPath(input: string): number {
  const lines = input.split('\n');
  const lenAtDepth: number[] = [];

  let maxLen = 0;

  for (const line of lines) {
    const depth = line.lastIndexOf('\t') + 1;
    const name = line.slice(depth);
    const nameLen = name.length;

    const currLen = (depth === 0 ? 0 : lenAtDepth[depth - 1] + 1) + nameLen;

    if (name.includes('.')) {
      maxLen = Math.max(maxLen, currLen);
    } else {
      lenAtDepth[depth] = currLen;
    }
  }

  return maxLen;
}

const input = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
console.log(lengthLongestPath(input));

/* 
/* 
Input: input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
Output: 20
Explanation: We have only one file, and the absolute path is "dir/subdir2/file.ext" of length 20.
*/
