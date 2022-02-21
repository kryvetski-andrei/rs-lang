import { renderMarkup } from '../../../utilities/renderMarkup';
import { mountDailyAudioCallGameStatDOMElement } from './components/dailyAudioCallGameStat';
import { mountDailySprintGameStatDOMElement } from './components/dailySprintGameStat';
import { dailyGamesStatMarkup } from './markup';

export const mountDailyGamesStatDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dailyGamesStatMarkup);

  const dailyGamesStatDOMElement = document.body.querySelector(`.daily-games-stat__wrapper`) as HTMLElement;
  mountDailySprintGameStatDOMElement(dailyGamesStatDOMElement);
  mountDailyAudioCallGameStatDOMElement(dailyGamesStatDOMElement);
};
