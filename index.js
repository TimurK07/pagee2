document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.FAQ__questions');

  questions.forEach((question) => {
    const title = question.querySelector('.FAQ__question');
    const text = question.querySelector('.FAQ__text');

    text.classList.remove('FAQ__text--open');

    // Добавляем обработчик события click к заголовку вопроса
    title.addEventListener('click', () => {
      // Переключаем класс у текста вопроса внутри текущего контейнера
      text.classList.toggle('FAQ__text--open');

      // Переключаем цвет фона и текста заголовка
      if (!question.classList.contains('clicked')) {
        title.style.backgroundColor = '#e7f1ff';
        title.style.color = '#00398a';
        // Заменяем иконку плюса на минус
        title.querySelector('.plus').style.display = 'none';
        title.querySelector('.minus').style.display = 'inline-block';
      } else {
        title.style.backgroundColor = '';
        title.style.color = '';
        // Заменяем иконку минуса на плюс
        title.querySelector('.plus').style.display = 'inline-block';
        title.querySelector('.minus').style.display = 'none';
      }

      // Инвертируем состояние клика на текущем вопросе
      question.classList.toggle('clicked');
    });
  });
});
