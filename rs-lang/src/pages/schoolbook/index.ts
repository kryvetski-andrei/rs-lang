import { mountWrapBookDOMElement, rerenderPagination } from '../../components/schoolbook';
import { createCardsOfBook } from '../../components/schoolbook/createCardsOfWord';
import { addPagesAndUnitsLocalStorage } from '../../components/schoolbook/localStorageOfBook';
import { startGames } from '../../components/schoolbook/startGames';
import { switchPageOfBook, updateStatePageOfBook } from '../../components/schoolbook/switchPage';
import { switchUnitsOfBook } from '../../components/schoolbook/switchUnits';
import { renderMarkup } from '../../utilities/renderMarkup';
import { schoolbookPageId } from './config';
import { schoolbookPageMarkup } from './markup';

export const mountSchoolbookPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, schoolbookPageMarkup);

  addPagesAndUnitsLocalStorage();
 
  const schoolbookPageElement = document.body.querySelector(`#${schoolbookPageId}`) as HTMLElement;
  mountWrapBookDOMElement(schoolbookPageElement);
  rerenderPagination()
  startGames();
  createCardsOfBook();
  updateStatePageOfBook();
  switchPageOfBook();
  switchUnitsOfBook();
};
