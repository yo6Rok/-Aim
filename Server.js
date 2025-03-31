const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Application = require('./models/application');

const app = express();

// Подключение к MongoDB
mongoose.connect('mongodb://localhost/cs2_clan', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Главная страница админки
app.get('/admin', (req, res) => {
    res.send('Панель управления');
});

// Страница заявок
app.get('/admin/applications', async (req, res) => {
    const applications = await Application.find();
    res.json(applications);
});

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.redirect('/');
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер работает на http://localhost:3000');
});
