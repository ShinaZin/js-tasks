// Написать функцию clone, которая будет возвращать новый объект, со значениями оригинального объекта
// Изменение полей склонированного объекта не должны влиять на оригинальный объект
// Дополнительно: использовать синтаксис деструктуризации

function main() {
  const user = { name: 'Ann', age: 25 };
  const clonedUser = user; // заменить на clone(user);

  user.name = 'Resurgent Fox';
  user.age = 5;

  // Должно вывести Resurgent Fox, 5
  console.log(user.name, user.age);
  // Должно вывести Ann, 25
  console.log(clonedUser.name, clonedUser.d);

}

main();
