export {};

import readline from 'readline';

function ask(query?: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query ?? '', (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

async function main() {
  const a = await ask('Nhập gì đó: ');
  console.log('Bạn đã nhập:', a);
}

main();
