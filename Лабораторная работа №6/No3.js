const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  const Pivo = []; //новый массив для совершеннолетних
  
  
  for (let i = 0; i < persons.length; i++)
 {
    if (persons[i].age >= 18) { // Если возраст 18 или больше, добавляем в новый массив
      Pivo.push(persons[i]);
    }
  }
  
  console.log(Pivo); // [{ name: 'Mark', age: 18 }, { name: 'John', age: 27 }, { name: 'Tony', age: 24 }]
  