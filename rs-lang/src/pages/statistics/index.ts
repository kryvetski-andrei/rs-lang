import { mountDailyGamesStatDOMElement } from '../../components/statistics/dailyGamesStat';
import { mountDailyWordsStatDOMElement } from '../../components/statistics/dailyWordsStat';
import { mountLongTermStatOfLearnedWordsDOMElement } from '../../components/statistics/longTermStatOfLearnedWords';
import { mountLongTermStatOfNewWordsDOMElement } from '../../components/statistics/longTermStatOfNewWords';
import { renderMarkup } from '../../utilities/renderMarkup';
import { statisticsPageId } from './config';
import { statisticsPageMarkup } from './markup';

export const mountStatisticsPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, statisticsPageMarkup);

  const statisticsPageDOMElement = document.body.querySelector(`#${statisticsPageId}`) as HTMLElement;

  mountDailyGamesStatDOMElement(statisticsPageDOMElement);
  mountDailyWordsStatDOMElement(statisticsPageDOMElement);
  mountLongTermStatOfLearnedWordsDOMElement(statisticsPageDOMElement);
  mountLongTermStatOfNewWordsDOMElement(statisticsPageDOMElement);
};
