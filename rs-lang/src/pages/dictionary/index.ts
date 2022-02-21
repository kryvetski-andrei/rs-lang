import { mountWrapDictionaryDOMElement } from '../../components/dictionary';
import { createWordsOfDictionary } from '../../components/dictionary/createWordsOfDictionary';
import { startGames } from '../../components/schoolbook/startGames';
import { renderMarkup } from '../../utilities/renderMarkup';
import { dictionaryPageId } from './config';
import { dictionaryPageMarkup } from './markup';

export const mountDictionaryPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, dictionaryPageMarkup);

  const dictionaryPageElement = document.body.querySelector(`#${dictionaryPageId}`) as HTMLElement;
  mountWrapDictionaryDOMElement(dictionaryPageElement);

  startGames();
  createWordsOfDictionary();
};
