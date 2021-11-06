import { console } from '../libs/console.js';

// Написать программу, которая:
// Сгенерирует массив из 10 случайных чисел
// Выведет этот массив в консоль
// Написать функцию findMax(array), которая методом перебора элементов найдет наибольшее число из массива и вернет его
// Вывести наибольшее число из массива

// Для генерации числа использовать функцию random из урока `8-random-in-range.mjs`

// Темы: 
// - Циклы
// - Операции сравнения (<, >, ..)

// Дополнительно
// Написать функцию findMin и вывести минимальный элемент массива

async function main() {
  const arrayOfRandomNumbers = [];
  for (let i = 0; i < 10; i++){
    arrayOfRandomNumbers.push(random(-100, 100));
  } 
  
  console.log(arrayOfRandomNumbers);
  console.log(findMax(arrayOfRandomNumbers)); 
}

main();


function findMax(arr) {
  let first = arr[0];
  let second;
  for (let i = 0; i < arr.length; i++){
    second = arr[i];
    if (second > first) { 
      first = second;
    }
  }
  return first;
}

function random(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}