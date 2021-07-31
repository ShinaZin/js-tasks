import { console } from '../libs/console.js';

// Ввести: имя пользователя
// Вывести: "Access granted!" если имя Admin, в остальных случаях "Access denied!"
// Темы: https://learn.javascript.ru/ifelse

// Дополнительно: 
// - добавить ввод пароля и если он равен паролю админа (придумать пароль самому), то только в этом случае разрешать вход
// - при выводе сообщения использовать тернарый оператор

async function main() {
  const userName = (await console.prompt(('Type your name here: '))).trim();
  const accessTrue = 'Admin';
  const userPassword = await console.prompt('Type password here: '); // тут ведь трим не нужен? можно и добавить ну типа я подумала это же пароль и тут не должен человек ошибаться так. Да, обычно в паролях пробелы запрещены кстати оо а как запрет сделать? Ой, это можно регулярками сделать (проще всего), но можно и вручную проверять. Потом попробуем, если хочешь// дааа я хочу , мне ругулярки интересно как пишутся, я вообще не понимаю, ок по регуляркам таск сделаю
  const passwordTrue = '1488';

  // if (accessTrue === userName && userPassword === passwordTrue) {
  //   console.log('Access granted!');
  // } else {
  //   console.log('Access denied!');
  // }

  const accessMessage = (accessTrue === userName && userPassword === passwordTrue)
    ? 'Access granted!'
    : 'Access denied!';
  console.log(accessMessage);

}

main();