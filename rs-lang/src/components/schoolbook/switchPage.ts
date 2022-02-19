import { rerenderPagination } from '.';
import { appState, nextPageOfBookClassName, prevPageOfBookClassName } from '../../pages/schoolbook/config';
import { MAX_NUMBER_OF_WORDS_PER_PAGE } from '../config';
import { createCardsOfBook } from './createCardsOfWord';

export const updateStatePageOfBook = async () => {
  const cardsPage = appState.numberPageOfSchoolbook + 1;

  if (cardsPage >= 1) {
    (document.querySelector(nextPageOfBookClassName) as HTMLButtonElement).disabled = false;
  } else {
    (document.querySelector(nextPageOfBookClassName) as HTMLButtonElement).disabled = true;
  }

  if (cardsPage === 1) {
    (document.querySelector(prevPageOfBookClassName) as HTMLButtonElement).disabled = true;
  } else {
    (document.querySelector(prevPageOfBookClassName) as HTMLButtonElement).disabled = false;
  }

  if (cardsPage === MAX_NUMBER_OF_WORDS_PER_PAGE) {
    (document.querySelector(nextPageOfBookClassName) as HTMLButtonElement).disabled = true;
  } else {
    (document.querySelector(nextPageOfBookClassName) as HTMLButtonElement).disabled = false;
  }
};

export const rerenderPageOfBook = () => {
  createCardsOfBook();
  
  updateStatePageOfBook();
  rerenderPagination();
};

export const switchPageOfBook = () => {
  document.querySelector(nextPageOfBookClassName)?.addEventListener('click', () => {
    appState.numberPageOfSchoolbook += 1;
    rerenderPageOfBook();
  });

  document.querySelector(prevPageOfBookClassName)?.addEventListener('click', () => {
    appState.numberPageOfSchoolbook -= 1;
    rerenderPageOfBook();
  });
};
