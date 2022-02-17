import { mountCardOfDictionaryDOMElement } from '.';
import { IWordDictionaryElement } from '../../interfaces';
import { boxCardsIdName } from '../../pages/dictionary/config';
import { getUserAggregatedHardWords } from '../../utilities/api';
import { userDataLocalStorage } from '../../utilities/api/config';
import { cleanUp } from '../../utilities/cleanUp';
import { gameAudioElement, gameSprintElement } from '../config';
import { switchAudio } from '../schoolbook/switchAudio';
import { deleteWordFromDifficult } from './deleteWordFromDictionary';

export const createWordsOfDictionary = async () => {
  const cardOfBookElement = document.getElementById(boxCardsIdName) as HTMLElement;
  cleanUp(cardOfBookElement);

  if (localStorage.getItem(`${userDataLocalStorage}`)) {
    const userDataForBook = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
    const wordsForDictionary = await getUserAggregatedHardWords(userDataForBook.userId);

    if (wordsForDictionary[0].paginatedResults.length === 0) {
      cardOfBookElement.innerHTML = 'У вас нет "Сложных слов"';
      // TODO maybe
      // gameSprintElement.disabled = true;
      // gameAudioElement.disabled = true;
    }

    wordsForDictionary[0].paginatedResults.forEach((wordOfdictionary: IWordDictionaryElement) => {
      mountCardOfDictionaryDOMElement(cardOfBookElement, wordOfdictionary);
      switchAudio(wordOfdictionary.word);
      deleteWordFromDifficult(wordOfdictionary.word, wordOfdictionary._id, userDataForBook.userId);
    });
  } else {
    cardOfBookElement.innerHTML =
      'Вам необходимо авторизоваться, чтобы была возможность увидеть раздел "Сложные слова"';
    // TODO maybe
    // gameSprintElement.disabled = true;
    // gameAudioElement.disabled = true;
  }
};
