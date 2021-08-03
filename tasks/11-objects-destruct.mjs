// Написать функцию clone, которая будет возвращать новый объект, со значениями оригинального объекта
// Изменение полей склонированного объекта не должны влиять на оригинальный объект
// Темы:
// - https://learn.javascript.ru/destructuring
// - https://learn.javascript.ru/object-copy
// Дополнительно: использовать синтаксис деструктуризации

function main() {
  const user = { name: 'John', age: 25 };
  console.log(`user (original): ${user.name}, ${user.age}`);
  const clonedUser = clone(user);
  // Когда меняется объект user, то изменяется и объект clonedUser, 
  // т.к. без `clone` обе переменные ссылаются на один и тот же объект
  // чтобы этого не происходило, нужно клонировать исходный объект
  user.name = 'Doe';
  user.age = 5;
  // mutate(user, 'Doe', 5);
  const changedUser = change(user, 'Changed user name');
  console.log(`changed (copy): ${changedUser.name}, ${changedUser.age}`);

  // Должно вывести Doe, 5
  console.log(`user (mutated): ${user.name}, ${user.age}`);
  // Должно вывести John, 25
  console.log(`user (cloned): ${clonedUser.name}, ${clonedUser.age}`);

  // Такой способ клонирования называется поверхностным, т.е. неглубокое клонирование. 
  // корректно клонируются только внешние поля 
  // const complexUser = {
  //   name: {
  //     firstName: 'John',
  //     secondName: 'Doe'
  //   },
  //   age: 25
  // };
  // Поэтому код ниже не сработает, как ожидается:
  // const clonedComplexUser = clone(complexUser); 
  // complexUser.name.firstName = 'Fox';       // Изменение поля firstName повляет на оба объекта: complexUser и clonedComplexUser
  // console.log(clonedComplexUser);           // т.к. поле name в них ссылается на один и тот же объект
  // console.log(complexUser);

  // Пример: попытка мутировать (изменить) переменную внутри функци:
  console.log('\n-------Try to mutate number--------------');
  const num = 7;
  console.log(`num (original): ${num}`);
  mutateNum2x(num); // при передаче не ссылочных типов (число, строка, true/false) в функции, они не мутируются внутри (не изменяются).
  console.log(`num (mutated): ${num} - not real mutated`);
  
  const newNum = mutateNum2x(num);
  console.log(`num (new value): ${newNum}`); // возвращается НОВОЕ значение, переменная num осталась как была
}

// // Синтаксис деструктуризации:
// const obj = { label: 'kek', value: 'lol' };
// // Извлечение значений объекта
// const objValue = obj.value;
// const objLabel = obj.label;
// // То же самое но в одну строку
// const { label, value } = obj;

// Синтаксис деструктуризации со взятием остатка
// const obj = { label: 'kek', value: 'lol', age: 11 };
// // Скопировать label и остальные поля в rest
// const { label, ...rest } = obj;
// // Скопировать все поля
// const { ...objClone } = obj;


function clone(user) {
  return { ...user };
};

main();

// Мутация (изменение) объекта. Работает, т.к. объекты (и массивы) в JS являются ссылочными типам
// и передаются в функции как ссылки. Что позволяет изменять объекты внутри функции.
// Стоит избегать такого подхода, т.к. при этом становится тяжело следить за состянием объкта
function mutate(user, newName, newAge) {
  user.name = newName;
  user.age = newAge;
}

// Вместо мутации стоит предпочитать создание нового объекта с нужными изменениями
function change(user, newNickName) {
  return { ...user, name: newNickName };
}

// Переменные простых типов (string, number, boolean) не подвержены мутации, т.к. они яляются типами-значениями
// При передаче таких переменных в функции они копируются
// Код ниже не изменит внешнюю переменную, которая передана параметром
// Но изменит локальную копию переменной. То есть возвращает число умноженное на два
function mutateNum2x(num) {
  num = num * 2;
  return num;
}
