import './index.scss';

export const dailySprintGameStatMarkup = `
  <section class="daily-sprint-games-stat__wrapper">
    <h3>Дневная статистика<br> по игре <b>Спринт</b></h3>
    <div class="daily-sprint-games-stat">
    <div class="wrapper"> 
      <h4>Количество новых слов за день</h4>
      <div class="daily-sprint-games-stat__item daily-sprint-games-stat__new-words-per-day">
      
      </div>
    </div>
    <div class="wrapper">
    <h4>Процент правильных ответов</h4>
        <div class="daily-sprint-games-stat__item daily-sprint-games-stat__percent-of-right-answeres">
          <canvas id="daily-sprint-games-stat__percent-of-right-answeres-chart">

          </canvas>
        </div>
      </div>
      <div class="wrapper"> 
      <h4>Лучшая серия правильных ответов</h4>
        <div class="daily-sprint-games-stat__item daily-sprint-games-stat__longest-streak">

        </div>
      </div>
    </div>
  </section>
`;
