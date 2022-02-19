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
  console.log(userStatistics, 'stata')
  // const learnedWordPerDay = userStatistics.optional.leanedWords.words;
  // console.log(learnedWordPerDay)
  const ctx = document.getElementById('long-term-stat-of-learned-words');
 
  const labels = generateChartDaysPoints();
  console.log(gener(labels, userStatistics.optional.learnedWordsPerDay))
  const data = {
    labels: labels,
    datasets: [{
      label: 'Увеличение общего количества изученных слов',
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
  });

console.log(myChart, 'myChart')
};

const gener = (days: any, values: any) => {
  const {year, month, daysInMonth} = getDaysInMonth();
  const result: any[] = []
  days.forEach((dayItem: any) => {
    let flag = true
    for (let key in values) {
      console.log(key, 'key')
      const [savedDay, savedMonth, savedYear] = key.split('.')
      if (dayItem === savedDay && month.toString().padStart(2, '0') === savedMonth) {
        result.push(values[key].length)
        flag = false
      } else {
        flag = true
      }
    }
    if (flag) result.push(null)
  })
  return result;
}

