import { renderMarkup } from '../../utilities/renderMarkup';
import { dictionaryPageMarkup } from './markup';

export const mountDictionaryPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dictionaryPageMarkup);
};
