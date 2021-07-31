// Написать функцию map, которая применяет переданную функцию callback к каждому элементу массива
// и возвращает новый массив измененных элементов
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
  // const multiplied = map(numbers, multiply2x);
  // console.log(multiplied);
  // пример использования #2
  // const objects = [{ name: 'banana', eaten: false }, { name: 'apple' }, { name: 'banana',  eaten: true }, { name: 'kiwi' }];
  // const fruiteNames = map(objects, getName);
  // console.log(fruiteNames);
  // пример использования #3 (jsx like)
  // const tags = map(fruiteNames, (name, i) => `<div key={i}>${name}</div>`);
}

function multiply2x(item) {
  return item * 2;
}

function getName(item) {
  return item.name;
}