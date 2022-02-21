import { renderMarkup } from '../../utilities/renderMarkup';
import { savePreviousPageToLocalStorage } from '../../utilities/savePageNameToLocalStorage';
import { gamesPageMarkup } from './markup';

export const mountGamesPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, gamesPageMarkup);

  document.body.querySelectorAll(`.game-button`)?.forEach((gameButton) => {
    gameButton.addEventListener('click', () => {
      savePreviousPageToLocalStorage();
    });
  });
};
