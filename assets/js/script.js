
// Скрипт для обработки форм
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Заявка или запрос отправлены!');
    });
});
    
