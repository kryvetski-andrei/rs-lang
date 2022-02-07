import { renderMarkup } from '../../utilities/renderMarkup';
import { schoolbookPageMarkup } from './markup';

export const mountSchoolbookPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, schoolbookPageMarkup);
};
