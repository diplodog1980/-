const Years = [1990, 2000, 1985, 1995]; 
const currentYear = new Date().getFullYear(); // текущий год
const ages = Years.map(year => currentYear - year);//Массив с возрастами

console.log(ages);
