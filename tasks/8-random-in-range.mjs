
// Написать функцию random(min, max), которая будет возвращать случайное число в интервале от min до max 
// Для генерации числа использовать метод Math.random(). Она возвращает десятичное (дробное) число от 0 до 1

// Дополнительно:
// Если передан только 1 параметр, то считать, что генерируется число от 0 до переданного числа
// Вынести функцию в отдельный файл /libs/random.mjs

function main() {
  const arrayOfRandoms = [];
  for (let i = 0; i < 30; i++) {
    arrayOfRandoms.push(random(-5, 15));
  }

  console.log(arrayOfRandoms);
}

main();

function random(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}
