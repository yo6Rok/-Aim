// Функция для обработки формы заявки
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    // Здесь можно добавить реальную логику отправки формы через API
});

// Функция для обработки формы поддержки
document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Сообщение отправлено! Мы скоро вам ответим.');
    // Реальная отправка сообщения на сервер или в базу данных
});
