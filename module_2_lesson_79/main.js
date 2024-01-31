const girl = {
  name: 'alina',
  age: 17.95,
  skill: 'looking for herself',
  
  findHerSelf() {
    console.log(`${this.skill} - 24/7`)
  }
}

girl.findHerSelf()

girl.age >= 18 ? console.log('ask her out on a date') : console.log('mark the time before the birthday');

function performMathOperations() {
  var number1 = Math.floor(Math.random() * 10);
  var number2 = Math.floor(Math.random() * 10);
  
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      var sum = number1 + number2;
      console.log(`Сумма ${number1} и ${number2} равна ${sum}`);
      break;
    case 1:
      var difference = number1 - number2;
      console.log(`Разность ${number1} и ${number2} равна ${difference}`);
      break;
    case 2:
      var product = number1 * number2;
      console.log(`Произведение ${number1} и ${number2} равно ${product}`);
      break;
    case 3:
      var division = number1 / number2;
      console.log(`Если разделить ${number1} на ${number2} то получим ${division}`);
      break;
    default:
      console.log("Некорректный ввод");
      break;
  }
}

performMathOperations()

// ok, here is the hometask:

let age = 18;

(function() {
  if (Math.random() < 0.5) {
    age--
  } else {
    age++
  }
})()

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18');