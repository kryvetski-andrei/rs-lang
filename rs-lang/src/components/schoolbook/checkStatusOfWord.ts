import { IWord, IUserWord } from '../../interfaces';
import { appState } from '../../pages/schoolbook/config';
import { getWords } from '../../utilities/api';
import { userDataLocalStorage } from '../../utilities/api/config';
import {
  audioGameClassName,
  inactiveLinkClassName,
  markedWordsClassName,
  MAX_NUMBER_OF_WORDS_ON_PAGE,
  sprintGameClassName,
  wrapOfWordsClassName,
} from '../config';
import { getWordsOfUser } from './createCardsOfWord';

export const checkStatusPage = async () => {
  const userDataForBook = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const arrayOfUserWord = await getWordsOfUser(userDataForBook.userId);
  const wordsForPage = await getWords(appState.numberPageOfSchoolbook, appState.groupOfSchoolbook);
  let countOfWordsOnPage = 0;
  wordsForPage.forEach((wordOfPage: IWord) => {
    arrayOfUserWord.forEach((wordOfUser: IUserWord) => {
      if (wordOfUser.optional.word === wordOfPage.word) {
        countOfWordsOnPage += 1;
      }
      return countOfWordsOnPage;
    });
  });
  if (countOfWordsOnPage === MAX_NUMBER_OF_WORDS_ON_PAGE) {
    document.body.querySelector(wrapOfWordsClassName)?.classList.add(markedWordsClassName);
    document.body.querySelector(audioGameClassName)?.classList.add(inactiveLinkClassName);
    document.body.querySelector(sprintGameClassName)?.classList.add(inactiveLinkClassName);
  } else {
    document.body.querySelector(wrapOfWordsClassName)?.classList.remove(markedWordsClassName);
    document.body.querySelector(audioGameClassName)?.classList.remove(inactiveLinkClassName);
    document.body.querySelector(sprintGameClassName)?.classList.remove(inactiveLinkClassName);
  }
};
