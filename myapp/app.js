const express = require('express'); // Импортируем Express
const app = express();              // Создаём экземпляр приложения Express
const path = require('path');       // Для работы с путями файловой системы

const PORT = 3000;

// Middleware для обработки JSON и данных формы
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Обслуживание статического контента из папки "public"
app.use(express.static(path.join(__dirname, 'public')));

// 2. Обработка GET-запросов (возвращает параметры запроса)
app.get('/get', (req, res) => {
    res.send({
        message: 'Обработка GET-запроса',
        query: req.query, // Параметры запроса
    });
});

// 3. Обработка POST-запросов (возвращает тело запроса)
app.post('/post', (req, res) => {
    res.send({
        message: 'Обработка POST-запроса',
        body: req.body, // Тело запроса
    });
});

// 4. Обработка ошибки 404 (для несуществующих маршрутов)
app.use((req, res) => {
    res.status(404).send({
        error: '404 Not Found',
        message: 'Запрашиваемая страница не найдена',
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
