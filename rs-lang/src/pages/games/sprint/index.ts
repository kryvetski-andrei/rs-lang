import { renderMarkup } from '../../../utilities/renderMarkup';
import { sprintPageMarkup } from './markup';

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup);
};