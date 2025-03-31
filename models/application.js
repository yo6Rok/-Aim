<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заявки</title>
    <link rel="stylesheet" href="assets/css/admin.css">
</head>
<body>

<header>
    <div class="logo">CS2 Клан - Заявки</div>
    <nav>
        <ul>
            <li><a href="/admin">Главная</a></li>
            <li><a href="/admin/applications">Заявки</a></li>
            <li><a href="/admin/users">Пользователи</a></li>
            <li><a href="/admin/news">Новости</a></li>
            <li><a href="/logout">Выйти</a></li>
        </ul>
    </nav>
</header>

<section>
    <h2>Заявки на вступление</h2>
    <table>
        <thead>
            <tr>
                <th>Имя</th>
                <th>Email</th>
                <th>Сообщение</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <!-- Пример заявок -->
            <% applications.forEach(application => { %>
            <tr>
                <td><%= application.username %></td>
                <td><%= application.email %></td>
                <td><%= application.message %></td>
                <td>
                    <button>Одобрить</button>
                    <button>Отклонить</button>
                </td>
            </tr>
            <% }) %>
        </tbody>
    </table>
</section>

<footer>
    <p>&copy; 2025 CS2 Клан</p>
</footer>

</body>
</html>
