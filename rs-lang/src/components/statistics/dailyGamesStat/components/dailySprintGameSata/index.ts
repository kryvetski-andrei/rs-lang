import { getUserStatistics } from '../../../../../utilities/api';
import { TokenService } from '../../../../../utilities/api/utilities';
import { renderMarkup } from '../../../../../utilities/renderMarkup';
import { dailySprintGameStatMarkup } from './markup';

import { Chart, registerables, ChartItem } from 'chart.js';
Chart.register(...registerables);

export const mountDailySprintGameStatDOMElement = async (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dailySprintGameStatMarkup);
  
  const newWordsPerDayDOMElement = document.body.querySelector(`.daily-sprint-games-stat__new-words-per-day`) as HTMLElement;
  const percentOfRightAnswersDOMElement = document.body.querySelector(`.daily-sprint-games-stat__percent-of-right-answeres`) as HTMLElement;
  const streakOfRightAnswersDOMElement = document.body.querySelector(`.daily-sprint-games-stat__longest-streak`) as HTMLElement;
  const ctx = document.getElementById('daily-sprint-games-stat__percent-of-right-answeres-chart')

  const userId = TokenService.getUser().userId;
  const userStatistic = await getUserStatistics(userId);
  const currentDate = new Date().toLocaleDateString('ru-RU');

  const { newWordsPerDay } = userStatistic.optional;
  newWordsPerDayDOMElement.innerText = newWordsPerDay[currentDate].length;

  const { longestSeries } = userStatistic.optional.sprintGameStat;
  streakOfRightAnswersDOMElement.innerText = longestSeries;

  const valueOfPlayedWords = Object.keys(userStatistic.optional.sprintGameStat).length - 1;
  const gameResults = userStatistic.optional.sprintGameStat;
  
  let numberOfRightAnsweres = 0;
  for (let key in gameResults) {
    if (typeof gameResults[key] === 'object') {
      const valueOfWins = gameResults[key].reduce((acc: any, answer: any) => {
        if (answer) return acc += 1
      }, 0)
      numberOfRightAnsweres += valueOfWins;
    }
  }
  console.log(numberOfRightAnsweres, 'numberOfRightAnsweres')

  const myChart = new Chart(ctx as ChartItem, {
    type: 'polarArea',
    data: {
      labels: [
        'Процент правильных ответов',
        'Процент неправильных ответов',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [50, 50],
        backgroundColor: [
          'green',
          'red',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {}
  });
}

