import { console } from '../libs/console.js';

// для запуска node ./tasks/0-echo
// Выводит то, что ввел пользователь

async function main() {
  const input = await console.prompt('Enter something: ');
  console.log(input);
}

main();