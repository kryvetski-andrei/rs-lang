import { renderMarkup } from '../../utilities/renderMarkup';
import { navigationMarkup } from './markup';

export const mountNavigationDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, navigationMarkup);
};
