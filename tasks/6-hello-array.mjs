import { console } from '../libs/console.js';

// Ввести: число count
// Ввести: разные имена через <Enter> count раз
// Вывести: Hello, имя для каждого введенного имени, а в конце "Hello to all"))

// Использовать массив для сохранения имен (метод .push) и обычный цикл с счетчиком for (let i = 0; ...)
// Темы: 
// - https://learn.javascript.ru/array
// - https://learn.javascript.ru/type-conversions 
// - https://learn.javascript.ru/while-for

async function main() {
  const array = [];
  const namesCount = Number(await console.prompt('Enter number of names: '));

  for (let i = 0; i < namesCount; i++) {
    array.push(await console.prompt(`Enter name № ${i + 1}: `));
  }

  // for (let i = 0; i < namesCount; i++) {
  //   console.log(`Hello, ${array[i]}`);
  // }
  array.forEach(meow => console.log(`Hey, ${meow} :3`));

  console.log('Hello all!');
}

main();