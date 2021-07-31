// Написать функцию filter, которая применяет переданную функцию callback к каждому элементу массива
// и возвращает массив элементов, для которых функция callback вернет true
// Параметры:
//    array - массив
//    callback - функция
// Для обхода массива использовать обычный цикл for (со счетчиком)  

// Дополнительно:
// - добавить передачу номера текущего элемента в вызов переданной функции
// - типизирвать функцию с помощью JSDoc

function main() {
  // пример использования #1
  // const numbers = [2, -1, -3, 9, 3, -2];
  // const negativeNumbers = filter(numbers, isNegative);
  // console.log(negativeNumbers);
  // пример использования #2
  // const objects = [{ name: 'banana', eaten: false }, { name: 'apple' }, { name: 'banana',  eaten: true }, { name: 'kiwi' }];
  // const favoriteFruites = filter(isBanana);
  // console.log(favoriteFruites);
  // пример использования #3
  // const otherFruits = filter(objects, it => !isBanana(it));
  // console.log(otherFruits);
  // пример использования #4
  // const secondAndFifth = filter(numbers, (it, i) => i == 2 || i == 5);
}

function isNegative(item) {
  return item < 0;
}

function isBanana(item) {
  return item.name == 'banana';
}