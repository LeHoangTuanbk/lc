## Template

```Typescript
function backtrack(path: any[], options: any[], res: any[]): void {
  if (isComplete(path)) {
    res.push([...path]);
    return;
  }

  for (let i = 0; i < options.length; i++) {
    if (shouldSkip(i, path, options)) continue;

    path.push(options[i]);
    backtrack(path, options, res);
    path.pop();
  }
}
```
