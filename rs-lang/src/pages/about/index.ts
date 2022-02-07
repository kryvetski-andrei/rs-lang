import { renderMarkup } from '../../utilities/renderMarkup';
import { aboutPageMarkup } from './markup';

export const mountAboutPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, aboutPageMarkup);
};
