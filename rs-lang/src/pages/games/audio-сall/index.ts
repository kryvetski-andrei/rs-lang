import { renderMarkup } from '../../../utilities/renderMarkup';
import { gamesPageMarkup } from './markup';

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, gamesPageMarkup);
};