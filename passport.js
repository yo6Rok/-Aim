const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const User = require('./models/user');
const Application = require('./models/application');

const app = express();

// Подключение к MongoDB
mongoose.connect('mongodb://localhost/cs2_clan', { useNewUrlParser: true, useUnifiedTopology: true });

// Настройки сессий
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Главная страница админки
app.get('/admin', (req, res) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        res.render('dashboard');  // Панель управления для администратора
    } else {
        res.redirect('/login');  // Если не админ, редиректим на страницу входа
    }
});

// Страница заявок
app.get('/admin/applications', async (req, res) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        const applications = await Application.find();
        res.render('applications', { applications });
    } else {
        res.redirect('/login');
    }
});

// Просмотр пользователей
app.get('/admin/users', async (req, res) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        const users = await User.find();
        res.render('users', { users });
    } else {
        res.redirect('/login');
    }
});

// Добавление новостей
app.get('/admin/news', (req, res) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        res.render('news');
    } else {
        res.redirect('/login');
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер работает на http://localhost:3000');
});
