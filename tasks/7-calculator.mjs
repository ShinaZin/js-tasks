import { console } from '../libs/console.js';

// Написать программу, которая будет производить указанное действие (+ - * /) с двумя введенными числами (a и b)
// Ввести: число a
// Ввести: действие
// Ввести: число b
// Ввести: результат действия

// Темы: 
// - https://learn.javascript.ru/type-conversions 
// - https://learn.javascript.ru/switch

// Дополнительно:
// - вместо if ..else if ..else.. заиcпользовать конструкцию switch
// - Сделать чтение выражения из одной строки (без лишних <Enter>, но через пробелы)
//  - использовать для этого метод.split(' ');

async function main() {
  // const { a, b, symbol } = await inputData();
  const { a, b, symbol } = await inputString();
  console.log(`Result: ${getValue(a, b, symbol)}`);
}

async function inputData() {
  const a = Number(await console.prompt('Enter first value: '));
  const symbol = await console.prompt('Enter type of operation: ');
  const b = Number(await console.prompt('Enter second value: '));
  return { a, b, symbol };
}


async function inputString() {
  const string = await console.prompt('Enter your expression: ');
  const elements = string.split(' ');
  const a = Number(elements[0]);
  const symbol = elements[1];
  const b = Number(elements[2]);
  return { a, b, symbol };
}

/**
 * @description вычисляет выражение `a` <действие> `b`
 * @param {number} a первый операнд
 * @param {number} b второй операнд
 * @param {string} symbol действие
 * @returns {number | undefined}
 * @example getValue(2, 5, '-') // -> -3
 */
function getValue(a, b, symbol) {
  // if (symbol === '+') {
  //   return a + b;
  // } else if (symbol === '-'){
  //   return a - b; 
  // } else if (symbol === '*'){ 
  //   return a * b;
  // } else if (symbol === '/'){
  //   return a / b;
  // }

  switch (symbol) {
    case '+': return a + b;
    case '-': return a - b; 
    case '*': return a * b; 
    case '/': return a / b; 
    default: console.log('Try again :{');
  }
}

main();