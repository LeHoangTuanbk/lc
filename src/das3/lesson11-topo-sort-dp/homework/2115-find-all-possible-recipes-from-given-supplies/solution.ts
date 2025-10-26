export function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[],
): string[] {
  const graph = new Map<string, string[]>();
  const inDegree = new Map<string, number>();
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ingredient = ingredients[i];
    for (let j = 0; j < ingredient.length; j++) {
      const value = graph.get(ingredient[j]) ?? [];
      if (value.length === 0) {
        graph.set(ingredient[j], [recipe]);
      } else {
        value.push(recipe);
      }
      inDegree.set(recipe, (inDegree.get(recipe) ?? 0) + 1);
    }
  }

  const queue: string[] = [...supplies];
  const topoResults = new Set<string>();
  while (queue.length) {
    const u = queue.shift();
    topoResults.add(u);

    for (const v of graph.get(u) ?? []) {
      const deg = inDegree.get(v) - 1;
      inDegree.set(v, deg);
      if (deg === 0) {
        queue.push(v);
      }
    }
  }

  return recipes.filter((item) => topoResults.has(item));
}

const recipes = ['bread', 'sandwich', 'burger'],
  ingredients = [
    ['yeast', 'flour'],
    ['bread', 'meat'],
    ['sandwich', 'meat', 'bread'],
  ],
  supplies = ['yeast', 'flour', 'meat'];

console.log(findAllRecipes(recipes, ingredients, supplies));
/* 
Example 3:

Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
Output: ["bread","sandwich","burger"]
Explanation:
We can create "bread" since we have the ingredients "yeast" and "flour".
We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".

*/
