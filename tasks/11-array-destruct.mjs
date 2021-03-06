// Написать функцию firstAndSecond, которая вернет новый массив, содержащий первый и второй элемент массива
// Написать функцию secondAndOther, которая вернет объект, содержащий два поля:
// second: второй элемент массива
// other: последующие элементы

// Дополнительно: использовать синтаксис деструктуризации

function main() {
  const numbers = [2, 1, 9, 3, -2];
  console.log(firstAndSecond(numbers));
  console.log(secondAndOther(numbers));
}

function firstAndSecond(numbers) {
  const [first, second] = numbers; 
  return [first, second];
}

function secondAndOther(numbers) {
  const [, second, ...rest] = numbers;
  return { second, other: rest };
}

main();
