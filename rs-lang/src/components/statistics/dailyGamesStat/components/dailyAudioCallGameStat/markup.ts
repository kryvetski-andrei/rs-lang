import './index.scss';

export const dailyAudioCallGameStatMarkup = `
  <section class="daily-audio-call-games-stat__wrapper">
    <h3>Дневная статистика<br> по играе <b>Аудио вызов</b></h3>
    <div class="daily-audio-call-games-stat">
      <div class="wrapper">
        <h4>Количество новых слов за день</h4>
        <div class="daily-audio-call-games-stat__item daily-audio-call-games-stat__new-words-per-day">
          
        </div>
      </div>
      <div class="wrapper">
        <h4>Процент правильных ответов</h4>
        <div class="daily-audio-call-games-stat__item daily-audio-call-games-stat__percent-of-right-answeres">
          <canvas id="daily-audio-call-games-stat__percent-of-right-answeres-chart">

          </canvas>
        </div>
      </div>
      <div class="wrapper">
        <h4>Лучшая серия правильных ответов</h4>
        <div class="daily-audio-call-games-stat__item daily-audio-call-games-stat__longest-streak">

        </div>
      </div>
    </div>
  </section>
`;
