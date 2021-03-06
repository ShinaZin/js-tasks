import { console } from '../libs/console.js';

// Написать программу, которая будет просить угадать число (0 - 100), которое она (программа) загадала (сгенерировала)
// От пользователя ожидается ввод числа, пока он не угадает число
// Если введенное число равно загаданному, то вывести "Sucess!"

// Для генерации числа использовать функцию random из урока `8-random-in-range.mjs`

// Темы: 
// - https://learn.javascript.ru/switch

// Дополнительно:
// Добавить подсказки
//   Если введенное число больше загаданного, то вывести "Too big"
//   Если введенное число меньше загаданного, то вывести "Too small"

async function main() {
  const randomNumber = random(0, 100);
  let userAnswer;

  while (userAnswer !== randomNumber) {
    userAnswer = Number(await console.prompt('Guess the number?'));
    if (userAnswer < randomNumber) {
      console.log('Too small :<');
    } else if (userAnswer > randomNumber) {
      console.log('Too big :<');
    }
  }
  console.log('Success!');
}

main();

function random(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}