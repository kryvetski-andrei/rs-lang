import { IWordDictionaryElement } from '../../interfaces';
import { renderMarkup } from '../../utilities/renderMarkup';
import { cardOfDictionary, wrapOfDictionary } from './markup';

export const mountWrapDictionaryDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, wrapOfDictionary);
};

export const mountCardOfDictionaryDOMElement = (parentDOMElement: HTMLElement, wordData: IWordDictionaryElement) => {
  renderMarkup(parentDOMElement, cardOfDictionary(wordData));
};
