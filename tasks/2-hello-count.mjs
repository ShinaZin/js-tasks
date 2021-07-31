import { console } from '../libs/console.js';

// Ввести: имя
// Ввести: число count
// Вывести: имя count раз (циклом while)

// Темы: https://learn.javascript.ru/while-for

// Дополнительно: 
// Использовать цикл for (let i = 0; ...) вместо while

async function main() {
  const someName = await console.prompt('Type your name: ');
  const randomNumber = await console.prompt('Count of repeat: ');
  
  let i = 0;
  while (i < Number(randomNumber)) {
    console.log(someName);
    i++;
  }

  for (let i = 0; i < Number(randomNumber); i++){
    console.log(someName);
  }
}

main();