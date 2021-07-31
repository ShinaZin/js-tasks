// Написать функцию each, которая применяет переданную функцию к каждому элементу массива 
// Параметры:
//    array - массив
//    callback - функция
// Для обхода массива использовать обычный цикл for (со счетчиком)  

// Дополнительно:
// - добавить передачу номера текущего элемента в вызов переданной функции
// - типизирвать функцию с помощью JSDoc

function main() {
  // пример использования #1
  // const numbers = [2, 1, 9, 3, -2];
  // each(numbers, prettyLog);
  // пример использования #2
  // const objects = [{ name: 'banana' }, { name: 'apple' }, { name: 'banana' }, { name: 'kiwi' }];
  // each(objects, it => it.name = it.name + ' was eaten');
  // each(objects, console.log);

}

main();

/**
 * @param {number | string | boolean} item
 * @param {number | undefined} index
 */
function prettyLog(item, index) {
  const num = index !== undefined ? `#${index} ` : '';
  console.log(`value ${num}= ${item}`);
}
