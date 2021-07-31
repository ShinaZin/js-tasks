import { console } from '../libs/console.js';

// Ввести: имя
// Вывести: Hello, имя!

// Темы: https://learn.javascript.ru/string

// Дополнительно:
// Использовать 3 разных способа соединения строк:
// - сложение через +
// - шаблонные строки ``
// - метод строк .concat()
// Вывести Hello имя на двух строчках, используя один console.log (нужен спец.символ \n)

async function main() {
  let userName = await console.prompt('Как Вас зовут? ');
  console.log(`Hello, ${userName}!`);
  console.log('Hey, '.concat(userName).concat('!'));
  console.log('Hi, ' + userName + '!');
}

main();