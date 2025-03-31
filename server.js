const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost/cs2_clan', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB подключен"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// Модели для заявок и пользователей
const Application = require('./models/application');
const User = require('./models/user');

// Страница главная (отправка заявок)
app.post('/applications', async (req, res) => {
    const { username, email, message } = req.body;
    const newApplication = new Application({ username, email, message });
    await newApplication.save();
    res.redirect('/');
});

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.redirect('/login');
});

// Логин пользователя
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

// Просмотр всех заявок для администраторов
app.get('/admin/applications', async (req, res) => {
    const applications = await Application.find();
    res.render('admin', { applications });
});

// Стартуем сервер
app.listen(3000, () => {
    console.log("Сервер работает на http://localhost:3000");
});
