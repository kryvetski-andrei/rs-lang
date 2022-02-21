import { Chart, registerables, ChartItem } from 'chart.js';
import { getUserStatistics } from '../../../../../utilities/api';
import { TokenService } from '../../../../../utilities/api/utilities';
import { renderMarkup } from '../../../../../utilities/renderMarkup';
import { dailyAudioCallGameStatMarkup } from './markup';

import { definePersent } from '../../../utilities';

Chart.register(...registerables);

export const mountDailyAudioCallGameStatDOMElement = async (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dailyAudioCallGameStatMarkup);

  const newWordsPerDayDOMElement = document.body.querySelector(
    `.daily-audio-call-games-stat__new-words-per-day`
  ) as HTMLElement;
  const percentOfRightAnswersDOMElement = document.body.querySelector(
    `.daily-audio-call-games-stat__percent-of-right-answeres`
  ) as HTMLElement;
  const streakOfRightAnswersDOMElement = document.body.querySelector(
    `.daily-audio-call-games-stat__longest-streak`
  ) as HTMLElement;
  const ctx = document.getElementById('daily-audio-call-games-stat__percent-of-right-answeres-chart');

  const { userId } = TokenService.getUser();
  const userStatistic = await getUserStatistics(userId);
  const currentDate = new Date().toLocaleDateString('ru-RU');

  const { newWordsPerDay } = userStatistic.optional;
  if (typeof newWordsPerDay[currentDate] === 'object') {
    newWordsPerDayDOMElement.innerText = newWordsPerDay[currentDate].length;
  }

  const { longestSeries } = userStatistic.optional.audioCallGameStat;
  streakOfRightAnswersDOMElement.innerText = longestSeries;

  const valueOfPlayedWords = Object.keys(userStatistic.optional.audioCallGameStat).length - 1;
  const gameResults = userStatistic.optional.audioCallGameStat;

  let numberOfCorrectAnswers = 0;
  let numberOfIncorrectAnswers = 0;

  for (const key in gameResults) {
    if (typeof gameResults[key] === 'object') {
      gameResults[key].forEach((answer: any) => {
        if (answer) {
          numberOfCorrectAnswers += 1;
        } else {
          numberOfIncorrectAnswers += 1;
        }
      });
    }
  }
  const numberOfAllAnswers = numberOfCorrectAnswers + numberOfIncorrectAnswers;
  const persentOfCorrectAnswers = definePersent(numberOfCorrectAnswers, numberOfAllAnswers);
  const persentOfIncorrectAnswers = definePersent(numberOfIncorrectAnswers, numberOfAllAnswers);

  const myChart = new Chart(ctx as ChartItem, {
    type: 'doughnut',
    data: {
      labels: ['Процент правильных ответов', 'Процент неправильных ответов'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [persentOfCorrectAnswers, persentOfIncorrectAnswers],
          backgroundColor: ['#ff6702', '#843602'],
        },
      ],
    },
    options: {},
  });
};
