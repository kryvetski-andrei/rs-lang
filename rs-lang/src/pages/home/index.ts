import { renderMarkup } from '../../utilities/renderMarkup';
import { homePageMarkup } from './markup';

export const mountHomePageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, homePageMarkup);
};
