import { mountCardOfBookDOMElement } from '.';
import { IWord } from '../../interfaces';
import { appState, boxCardsIdName } from '../../pages/schoolbook/config';
import { getUserWords, getWords } from '../../utilities/api';
import { userDataLocalStorage } from '../../utilities/api/config';
import { cleanUp } from '../../utilities/cleanUp';
import { checkStatusPage } from './checkStatusOfWord';
import { addPageOfBookInLocalStorage, addUnitOfBookInLocalStorage } from './localStorageOfBook';
import { showArea } from './showAreaDifficultAndLearn';
import { switchAudio } from './switchAudio';

export const getWordsOfUser = async (userId: string) => {
  const arrayOfWords = await getUserWords(userId);
  return arrayOfWords;
};

export const createCardsOfBook = async () => {
  const cardOfBookElement = document.getElementById(boxCardsIdName) as HTMLElement;

  addPageOfBookInLocalStorage();
  addUnitOfBookInLocalStorage();

  const wordsForPage = await getWords(appState.numberPageOfSchoolbook, appState.groupOfSchoolbook);

  cleanUp(cardOfBookElement);

  const numericOfUnit = String(appState.groupOfSchoolbook + 1);
  
  if (localStorage.getItem(`${userDataLocalStorage}`)) {
    const userDataForBook = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
    const arrayOfUserWord = await getWordsOfUser(userDataForBook.userId);

    wordsForPage.forEach((wordOfPage: IWord) => {
      mountCardOfBookDOMElement(cardOfBookElement, wordOfPage, numericOfUnit);
      switchAudio(wordOfPage.word);
      showArea(wordOfPage.word, wordOfPage.id, userDataForBook.userId, arrayOfUserWord);
    });
    checkStatusPage();
  } else {
    wordsForPage.forEach((wordOfPage: IWord) => {
      mountCardOfBookDOMElement(cardOfBookElement, wordOfPage, numericOfUnit);
      switchAudio(wordOfPage.word);
    });
  }
};

