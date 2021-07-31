import { console } from '../libs/console.js';

// Написать функцию hello(name), которая будет возвращать строчку Hello, name!
// Ввести: имя
// Вывести: Hello, имя!

// Темы: https://learn.javascript.ru/function-basics
// Дополнительно: 
// - добавить второй параметр greeting, который будет подставляться вместо Hello, пример hello('Ann', 'Hola') => Hola, Ann!
// - можно сделать второй параметр со значением по умолчанию = 'Hello'

async function main() {
  const userName = await console.prompt('What`s your name? ');
  console.log(helloName(userName));
  console.log(helloName(userName, 'Hola')); // должно вывести Hola, userName
  console.log(helloName('John Rock 🗿')); 
}

main();

function helloName(userName, greetingUser = 'Hello') {
  return greetingUser + ', ' + userName;
}