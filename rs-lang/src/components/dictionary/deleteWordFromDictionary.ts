import { deleteUserWord } from '../../utilities/api';
import { difficultClassName } from '../config';

export const deleteWordFromDifficult = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.difficult-button-${word}`)?.addEventListener('click', async ({ target }) => {
    const difficultButtonElement = target as HTMLButtonElement;
    if (difficultButtonElement.classList.contains(difficultClassName)) {
      difficultButtonElement.classList.remove(difficultClassName);
      await deleteUserWord(idUser, idWord);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
      document.getElementById(idWord)?.remove();
    }
  });
};
