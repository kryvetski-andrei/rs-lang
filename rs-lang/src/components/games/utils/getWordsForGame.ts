import { getWords } from '../../../utilities/api';
import { gamesPageName, groupOfBook, pageOfBook, previousPage, schoolbookPageName } from '../config';
import { getCurrentGroupOfWords } from './getCurrentGroup';

export const getWordsForGame = async (): Promise<any> => {
  if (localStorage.getItem(previousPage) === gamesPageName) {
    return getWords(0, getCurrentGroupOfWords());
  }
  if (localStorage.getItem(previousPage) === schoolbookPageName) {
    return getWords(Number(localStorage.getItem(pageOfBook)), Number(localStorage.getItem(groupOfBook)));
  }
};
