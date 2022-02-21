import { renderMarkup } from '../../../utilities/renderMarkup';

import { longTermStatOfLearnedWordsMarkup } from './markup';

import { Chart, registerables, ChartItem } from 'chart.js';
import { generateChartDaysPoints, getDaysInMonth } from '../utilities';
import { getUserStatistics } from '../../../utilities/api';
import { TokenService } from '../../../utilities/api/utilities';

Chart.register(...registerables);

export const mountLongTermStatOfLearnedWordsDOMElement = async (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, longTermStatOfLearnedWordsMarkup);
  const userId = TokenService.getUser().userId;
  const userStatistics = (await getUserStatistics(userId));
  console.log(userStatistics, 'stataaaaaaaaaaaaaa')
  // const learnedWordPerDay = userStatistics.optional.leanedWords.words;
  // console.log(learnedWordPerDay)
  const ctx = document.getElementById('long-term-stat-of-learned-words');
 
  const labels = generateChartDaysPoints();
  console.log(gener(labels, userStatistics.optional.learnedWordsPerDay))
  console.log(labels, 'labels')
  const data = {
    labels: labels,
    datasets: [{
      label: 'Количество изученных слов',
      data: gener(labels, userStatistics.optional.learnedWordsPerDay),
      fill: true,
      borderColor: 'green',
      tension: 0.1
    },
  ]
  };
  const myChart = new Chart(ctx as ChartItem, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        title: {
          display: true,
          text: 'График увеличение общего количества изученных слов'
        }
      },
      hover: {
        mode: 'index',

      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Дни'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Количество изученных слов'
          },
          min: 0,
          ticks: {
            stepSize: 1
          }
        }
      }
    },
  });

console.log(myChart, 'myChart')
};

const gener = (days: any, values: any) => {
  console.log(days.length, 'days leng')
  const dailyResults = Array(days.length).fill(null);


  const {year, month, daysInMonth} = getDaysInMonth();
  const result: any[] = []
  days.forEach((dayItem: any, index: any) => {
    for (let key in values) {

      const [savedDay, savedMonth, savedYear] = key.split('.')
      if (dayItem === savedDay && month.toString().padStart(2, '0') === savedMonth) {

        dailyResults[index] = values[key].length;
      } 
    }

  })
  console.log(dailyResults, 'dayli results')
  return dailyResults;
}

