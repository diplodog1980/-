const numbers = [1, 2, 3, 4, 5];

let summ = 0;
let currentValue;//эемент масива который будет обрабатываться на каждой итерации
for (let i = 0; i < numbers.length; i++)
 {
  currentValue = numbers[i];// Присваиваем текущий элемент массива
  summ = summ + currentValue;
}

console.log(summ);
