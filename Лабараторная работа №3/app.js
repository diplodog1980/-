
// Задача 1
function task1() {
    const array = Array.from({length: 15}, () => Math.floor(Math.random() * 41) - 10);
    const positiveAvg = array.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0) / 
                        array.filter(num => num > 0).length;
    console.log("Массив:", array);
    console.log("Среднее значение положительных чисел:", positiveAvg);
}

// Задача 2
function task2() {
    const n = 15; // n>10
    const array = Array.from({length: n}, () => Math.floor(Math.random() * 41) - 20);
    const modifiedArray = array.map(num => num < 0 ? num * num : num);
    console.log("Исходный массив:", array);
    console.log("Измененный массив:", modifiedArray);
}

// Задача 3
function task3() {
    const array = Array.from({length: 20}, () => Math.floor(Math.random() * 41) - 20);
    const positives = array.filter(num => num > 0);
    const negatives = array.filter(num => num < 0);
    const zeros = array.filter(num => num === 0).length;
    
    const positiveAvg = positives.reduce((acc, curr) => acc + curr, 0) / positives.length;
    const negativeAvg = negatives.reduce((acc, curr) => acc + curr, 0) / negatives.length;
    
    console.log("Массив:", array);
    console.log("Среднее значение положительных чисел:", positiveAvg);
    console.log("Среднее значение отрицательных чисел:", negativeAvg);
    console.log("Количество нулей:", zeros);
}

// Задача 4
function task4() {
    const iterations = 1000000;
    let redCount = 0;
    let maxRedStreak = 0;
    let currentRedStreak = 0;
    
    for(let i = 0; i < iterations; i++) {
        const color = Math.floor(Math.random() * 3);
        if(color === 0) { // Красный
            currentRedStreak++;
            redCount++;
            if(currentRedStreak > maxRedStreak) {
                maxRedStreak = currentRedStreak;
            }
        } else {
            currentRedStreak = 0;
        }
    }
    
    console.log("Общее количество красных:", redCount);
    console.log("Максимальное количество красных подряд:", maxRedStreak);
}

// Запуск всех задач
task1();
task2();
task3();
task4();