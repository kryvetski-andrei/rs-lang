import { renderMarkup } from '../../../utilities/renderMarkup';
import { gamesPageMarkup } from './markup';

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, gamesPageMarkup);
};