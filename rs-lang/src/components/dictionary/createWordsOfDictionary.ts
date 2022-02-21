import { mountCardOfDictionaryDOMElement } from '.';
import { IWordDictionaryElement } from '../../interfaces';
import { boxCardsIdName } from '../../pages/dictionary/config';
import { getUserAggregatedHardWords } from '../../utilities/api';
import { userDataLocalStorage } from '../../utilities/api/config';
import { cleanUp } from '../../utilities/cleanUp';
import { hiddenClassName, boxGamesClassName, infoClassName } from '../config';
import { switchAudio } from '../schoolbook/switchAudio';
import { deleteWordFromDifficult } from './deleteWordFromDictionary';

export const checkCountOfWord = (countOfwordIndictionary: number) => {
  const cardOfBookElement = document.getElementById(boxCardsIdName) as HTMLElement;
  if (countOfwordIndictionary === 0) {
    cardOfBookElement.innerHTML = 'У вас нет "Сложных слов"';
    document.body.querySelector(boxGamesClassName)?.classList.add(hiddenClassName);
    cardOfBookElement?.classList.add(infoClassName);
  } else {
    document.body.querySelector(boxGamesClassName)?.classList.remove(hiddenClassName);
  }
};

export const createWordsOfDictionary = async () => {
  const cardOfBookElement = document.getElementById(boxCardsIdName) as HTMLElement;

  cleanUp(cardOfBookElement);

  if (localStorage.getItem(`${userDataLocalStorage}`)) {
    const userDataForBook = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
    const wordsForDictionary = await getUserAggregatedHardWords(userDataForBook.userId);
    const countOfwordIndictionary = wordsForDictionary[0].paginatedResults.length;
    checkCountOfWord(countOfwordIndictionary);

    wordsForDictionary[0].paginatedResults.forEach(async (wordOfdictionary: IWordDictionaryElement) => {
      mountCardOfDictionaryDOMElement(cardOfBookElement, wordOfdictionary);
      switchAudio(wordOfdictionary.word);
      deleteWordFromDifficult(wordOfdictionary.word, wordOfdictionary._id, userDataForBook.userId);
    });
  } else {
    cardOfBookElement.innerHTML =
      'Вам необходимо авторизоваться, чтобы была возможность увидеть раздел "Сложные слова"';
    cardOfBookElement?.classList.add(infoClassName);
  }
};
