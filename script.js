// Получаем объект WebApp
const tg = window.Telegram.WebApp;

// По желанию: развернуть webview на весь экран
tg.expand();

// Скрыть ненужные кнопки в интерфейсе Telegram
tg.MainButton.hide();

// Обработчик кнопки отправки формы
document.getElementById('submit-btn').addEventListener('click', () => {
  const task    = document.getElementById('task').value.trim();
  const address = document.getElementById('address').value.trim();
  const date    = document.getElementById('date').value;
  const photos  = document.getElementById('photos').value
                   .split(',')
                   .map(s => s.trim())
                   .filter(s => s.length);
  const name    = document.getElementById('name').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  
  if (!task || !address || !date || !name || !phone) {
    alert('Пожалуйста, заполните все обязательные поля.');
    return;
  }

  const payload = {
    task,
    address,
    date,
    photos,
    contacts: {
      name,
      phone
    }
  };

  // отправляем данные боту
  tg.sendData(JSON.stringify(payload));
});