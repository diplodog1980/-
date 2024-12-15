//задание1
/*let user = { 
    name: "Джон",
    age: 30
  };
  Добавим метод для объекта
  user.sayHi = function() {
    alert("Привет!");
  };
  
  user.sayHi(); // Привет! 
/*  Анализ: Здесь создаётся объект user с двумя свойствами: name и age.
Далее добавляется метод sayHi, который выводит приветственное сообщение.
Вызов user.sayHi() приводит к отображению окна с текстом "Привет!" */

//задание2
/* let customer = {
    name: "Алексей",
    age: 28,
    email: "alexey@gmail.com",
    phone: "+7 800 555 3535",
    address: "Москва, ул. Пушкина, д. 10"
  };
  
  console.log(customer.name);  // Алексей
  console.log(customer.email); // alexey@example.com
  console.log(customer.phone);  // 7 800 555 3535 */
  
  // адание 3
  /* let user = {
    name: "Светлана",
    age: 25
  };
  
  let order = {
    orderId: 12345,
    items: ["Пицца", "Салат", "Напиток"],
    total: 1500
  };
  
  let restaurant = {
    name: "Итальянская Кухня",
    location: "Центр города",
    cuisine: "Итальянская"
  };
  
  // Условие для вывода информации
  if (user.age > 21) {
    console.log(`${user.name} сделал(а) заказ на сумму ${order.total} в ресторане ${restaurant.name}, коорый находится в "${restaurant.location}".`);
  }
  */
 
  // задание 4
  /*
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  console.log(user.name); // Вася
  console.log(user.isAdmin); // false
  */

  //задание 5
  /* function Student(name) {
  this.name = name;

  this.sayHi = function() {
    console.log("Меня зовут: " + this.name);
  };
}

let vasya = new Student("Вася");

vasya.sayHi(); // Меня зовут: Вася 
*/

//ДОП задние
const calculator = {
  //сложение
  add(a, b) {
    return a + b;
  },

  //вычитание
  subtract(a, b) {
    return a - b;
  },

  //умножение
  multiply(a, b) {
    return a * b;
  },

  
  divide(a, b) {//деление
    if (b === 0) {
      return "Ошибка: деление на ноль";
    }
    return a / b;
  }
};
// Примеры использования:
console.log(calculator.add(5, 3));        // 8
console.log(calculator.subtract(5, 3));   // 2
console.log(calculator.multiply(5, 3));   // 15
console.log(calculator.divide(5, 3));     // 1.666...
console.log(calculator.divide(5, 0));     // Ошибка: деление на ноль

  