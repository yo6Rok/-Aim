// Переключение темы (темная/светлая)
const themeToggleButton = document.createElement('button');
themeToggleButton.innerText = '🌙';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.top = '20px';
themeToggleButton.style.right = '20px';
themeToggleButton.style.background = 'transparent';
themeToggleButton.style.border = 'none';
themeToggleButton.style.fontSize = '2rem';
themeToggleButton.style.cursor = 'pointer';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggleButton.innerText = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Форма заявок
document.getElementById('applicationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!username || !email || !message) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    alert(`Заявка от ${username} отправлена! Мы свяжемся с вами по email: ${email}`);
});

// Для панели администратора
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        alert('Добро пожаловать в панель администратора!');
    } else {
        alert('Неверный логин или пароль!');
    }
});
