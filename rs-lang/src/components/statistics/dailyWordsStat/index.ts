import { Chart, registerables, ChartItem } from 'chart.js';
import { getUserStatistics } from '../../../utilities/api';
import { TokenService } from '../../../utilities/api/utilities';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { dailyWordsStatMarkup } from './markup';

import { definePersent } from '../utilities';

Chart.register(...registerables);

export const mountDailyWordsStatDOMElement = async (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dailyWordsStatMarkup);

  const newWordsPerDayDOMElement = document.body.querySelector(`.daily-words-stat__new-words-per-day`) as HTMLElement;
  const percentOfRightAnswersDOMElement = document.body.querySelector(
    `.daily-words-stat__percent-of-right-answeres`
  ) as HTMLElement;
  const learnedWordsPerDayDOMElement = document.body.querySelector(
    `.daily-words-stat__learned-words-per-day`
  ) as HTMLElement;
  const ctx = document.getElementById('daily-words-stat__percent-of-right-answeres-chart');

  const { userId } = TokenService.getUser();
  const userStatistic = await getUserStatistics(userId);
  const currentDate = new Date().toLocaleDateString('ru-RU');

  const { newWordsPerDay } = userStatistic.optional;
  if (typeof newWordsPerDay[currentDate] === 'object') {
    newWordsPerDayDOMElement.innerText = newWordsPerDay[currentDate].length;
  }

  const { learnedWordsPerDay } = userStatistic.optional;

  if (typeof learnedWordsPerDay[currentDate] === 'object') {
    learnedWordsPerDayDOMElement.innerText = learnedWordsPerDay[currentDate].length;
  }

  const valueOfPlayedWords = Object.keys(userStatistic.optional.sprintGameStat).length - 1;
  const sprintGameResults = userStatistic.optional.sprintGameStat;
  const audioCallGameResults = userStatistic.optional.audioCallGameStat;

  let numberOfCorrectAnswers = 0;
  let numberOfIncorrectAnswers = 0;

  for (const key in sprintGameResults) {
    if (typeof sprintGameResults[key] === 'object') {
      sprintGameResults[key].forEach((answer: any) => {
        if (answer) {
          numberOfCorrectAnswers += 1;
        } else {
          numberOfIncorrectAnswers += 1;
        }
      });
    }
  }

  for (const key in audioCallGameResults) {
    if (typeof audioCallGameResults[key] === 'object') {
      audioCallGameResults[key].forEach((answer: any) => {
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
          backgroundColor: ['#6f1abf', '#3c086c'],
        },
      ],
    },
    options: {},
  });
};
