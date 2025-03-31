
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');

const app = express();

// MongoDB подключение
mongoose.connect('mongodb://localhost/cs2-clan', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB подключен"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' }
}));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.redirect('/login');
});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.listen(3000, () => {
    console.log("Сервер работает на http://localhost:3000");
});
    