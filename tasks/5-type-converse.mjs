// @ts-check
import { console } from '../libs/console.js';

// Ввести: два числа через <Enter>
// Вывести: максимальное из этих чисел

// Темы: 
// - https://learn.javascript.ru/ifelse
// - https://learn.javascript.ru/type-conversions 
// - https://learn.javascript.ru/function-basics

// Дополнительно: 
// - оформить в виде функции max(a, b)
// - написать противоположную функцию min(a, b)

async function main() {
  const a = Number(await console.prompt('Enter first number: '));
  const b = Number(await console.prompt('Enter second number: '));
  // console.log(a > b ? a : b);
  console.log(maxNum(a, b));
  console.log(minNum(a, b));
};

main();

// function maxNum(a, b) {
//   if(a > b){
//     return a;
//   } else {
//     return b;
//   }
// }

function maxNum(a, b) {
  return a > b ? a : b;
}

function minNum(a, b) {
  return a < b ? a : b;
}
