import './index.scss';

export const dailyWordsStatMarkup = `
  <section class="daily-words-stat__wrapper">
    <h3>Дневная статистика по словам</h3>
    <div class="daily-words-stat">
    <div class="wrapper">
      <h4>Количество новых слов за день</h4>
      <div class="daily-words-stat__item daily-words-stat__new-words-per-day">
      
      </div>
    </div>
    <div class="wrapper">
    <h4>Процент правильных ответов</h4>
      <div class="daily-words-stat__item daily-words-stat__percent-of-right-answeres">
        <canvas id="daily-words-stat__percent-of-right-answeres-chart">

        </canvas>
      </div>
    </div>
    <div class="wrapper">
    <h4>Количество изученных слов за день</h4>
      <div class="daily-words-stat__item daily-words-stat__learned-words-per-day">
      
      </div>
      </div>
    </div>
  </section>
  <hr>
`;
