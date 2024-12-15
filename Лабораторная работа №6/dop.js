function task4() {
    var arr = []; // создаём пустой массив для хранения случайных значений
    const iterations = 1000000; // количество итераций
    let maxSequence = { color: null, length: 0 }; // объект для самой длинной последовательности
    let currentColor = null; // переменная для текущего цвета последовательности
    let currentLength = 0; // длина текущей последовательности

    // генерируем массив случайных значений
    for (let i = 0; i < iterations; i++) {
        arr[i] = Math.round(Math.random() * 2); // добавляем случайное число 0, 1 или 2 в массив
    }

    // подсчёт самых длинных последовательностей и общих результатов
    const results = { red: 0, black: 0, white: 0 }; // объект для подсчёта каждого цвета
    for (let i = 0; i < iterations; i++) {
        // увеличиваем счётчик для соответствующего цвета
        if (arr[i] === 0) {
            results.red++;
        } else if (arr[i] === 1) {
            results.black++;
        } else if (arr[i] === 2) {
            results.white++;
        }

        // проверка на новую последовательность
        if (arr[i] === currentColor) {
            currentLength++; // увеличиваем длину текущей последовательности
        } else {
            currentColor = arr[i]; // новая последовательность
            currentLength = 1; // длина новой последовательности = 1
        }

        // проверка найдена ли более длинная последовательность
        if (currentLength > maxSequence.length) {
            maxSequence = { color: arr[i], length: currentLength }; // обновляем максимальную последовательность
        }
    }

    //вывод результата
    console.log("Количество красных значений:", results.red); // выводим количество красных значений
    console.log("Количество чёрных значений:", results.black); // выводим количество чёрных значений
    console.log("Количество белых значений:", results.white); // выводим количество белых значений
    console.log("Самая длинная последовательность:", maxSequence.length, "цвет:", maxSequence.color); // выводим информацию о самой длинной последовательности
}