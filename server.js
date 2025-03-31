const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Application = require('./models/application');
const User = require('./models/user');

const app = express();

// Подключение к базе данных
mongoose.connect('mongodb://localhost/cs2_clan', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Маршруты
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.redirect('/');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
});

app.post('/applications', async (req, res) => {
    const { username, email, message } = req.body;
    const application = new Application({ username, email, message });
    await application.save();
    res.redirect('/');
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер работает на http://localhost:3000');
});
