import { deleteUserWord, getUserAggregatedHardWords } from '../../utilities/api';
import { userDataLocalStorage } from '../../utilities/api/config';
import { difficultClassName } from '../config';
import { checkCountOfWord } from './createWordsOfDictionary';

export const checkWordsOfDictionary = async () => {
  const userDataForBook = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const wordsForDictionary = await getUserAggregatedHardWords(userDataForBook.userId);
  const countOfwordIndictionary = wordsForDictionary[0].paginatedResults.length;
  checkCountOfWord(countOfwordIndictionary);
};

export const deleteWordFromDifficult = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.difficult-button-${word}`)?.addEventListener('click', async ({ target }) => {
    const difficultButtonElement = target as HTMLButtonElement;
    if (difficultButtonElement.classList.contains(difficultClassName)) {
      difficultButtonElement.classList.remove(difficultClassName);
      await deleteUserWord(idUser, idWord);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
      document.getElementById(idWord)?.remove();
      checkWordsOfDictionary();
    }
  });
};
