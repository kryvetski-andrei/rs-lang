import { renderMarkup } from '../../utilities/renderMarkup';
import { gamesPageMarkup } from './markup';

export const mountGamesPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, gamesPageMarkup);
};
