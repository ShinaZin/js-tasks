// Написать функцию find, которая применяет переданную функцию callback к каждому элементу массива
// и возвращает элемент, для которого функция callback вернет true
// Параметры:
//    array - массив
//    callback - функция
// Для обхода массива использовать обычный цикл for (со счетчиком)  

// Дополнительно:
// - написать функцию findLast, которая будет обходить с конца к началу
// - типизирвать функции с помощью JSDoc

function main() {
  // пример использования #1
  // const numbers = [2, 1, 9, 3, -2];
  // const negative = find(numbers, isNegative);
  // console.log(negative);
  // пример использования #2
  // const objects = [{ name: 'banana', eaten: false }, { name: 'apple' }, { name: 'banana',  eaten: true }, { name: 'kiwi' }];
  // const favoriteFruite = find(objects, it => it.name == 'banana');
  // console.log(favoriteFruite);
  // пример использования #3
  // const lastFavoriteFruite = findLast(objects, it => it.name == 'banana');
  // console.log(lastFavoriteFruite);
}

function isNegative(item) {
  return item < 0;
}