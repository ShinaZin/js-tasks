// Написать функцию forEach, которая применяет переданную функцию к каждому элементу массива 
// Параметры:
//    array - массив
//    callback - функция
// Для обхода массива использовать обычный цикл for (со счетчиком)  

// Дополнительно:
// - добавить передачу номера текущего элемента в вызов переданной функции
// - вынести функцию forEach в libs/foreach.mjs

const doubleValueFunc = x => {
  console.log(`doubleValue = ${x * 2}`);
};

function doubleNumb(x) {
  console.log(`doubleValue = ${x * 2}`);
}

function main() {
  // пример использования #1
  const numbers = [2, 1, 9, 3, -2];
  forEach(numbers, prettyLog);
  console.log('------------');
  // пример использования #2
  const objects = [{ name: 'banana' }, { name: 'apple' }, { name: 'banana' }, { name: 'kiwi' }];
  forEach(objects, it => it.name = it.name + ' was eaten');
  forEach(objects, console.log); 

  forEach(numbers, x => {
    console.log(`doubleValue = ${x * 2}`);
  });

  console.log('------------');
  forEach(numbers, doubleValueFunc);

  console.log('------------');
  forEach(numbers, doubleNumb);
};
main();

/**
 * @param {number | string | boolean} item
 * @param {number | undefined} index
 */
function prettyLog(item, index) {
  const num = index !== undefined ? `#${index + 1}  ` : '';
  console.log(`value ${num}= ${item}`);
}

function forEach(numbers, func) {
  for (let i = 0; i < numbers.length; i++) {
    func(numbers[i], i);
  }
}