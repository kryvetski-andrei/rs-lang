import { renderMarkup } from '../../../utilities/renderMarkup';
import { mountDailySprintGameStatDOMElement } from './components/dailySprintGameSata';
import { dailyGamesStatMarkup } from './markup';

export const mountDailyGamesStatDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dailyGamesStatMarkup);
  
  const dailyGamesStatDOMElement = document.body.querySelector(`.daily-games-stat__wrapper`) as HTMLElement;
  mountDailySprintGameStatDOMElement(dailyGamesStatDOMElement);
}

