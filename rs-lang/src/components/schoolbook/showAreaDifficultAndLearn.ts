import { IUserWord } from '../../interfaces';
import { deleteUserWord, postUsersWords } from '../../utilities/api';
import {
  difficultClassName,
  hiddenClassName,
  markOfDifficultWord,
  markOfLearnedWord,
  markOfNot,
  studiedClassName,
} from '../config';
import { checkStatusPage } from './checkStatusOfWord';

export const toggleLearnButton = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.learn-button-${word}`)?.addEventListener('click', async ({ target }) => {
    const learnButtonElement = target as HTMLButtonElement;
    if (learnButtonElement.classList.contains(studiedClassName)) {
      learnButtonElement.classList.remove(studiedClassName);
      await deleteUserWord(idUser, idWord);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = false;
      checkStatusPage();
    } else {
      learnButtonElement.classList.add(studiedClassName);
      const learnOption = { difficulty: markOfNot, optional: { learn: markOfLearnedWord, word } };
      await postUsersWords(idUser, idWord, learnOption);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
      checkStatusPage();
    }
  });
};

export const toggleDifficultButton = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.difficult-button-${word}`)?.addEventListener('click', async ({ target }) => {
    const difficultButtonElement = target as HTMLButtonElement;
    difficultButtonElement.classList.add(difficultClassName);
    const difficultOption = { difficulty: markOfDifficultWord, optional: { learn: markOfNot, word } };
    await postUsersWords(idUser, idWord, difficultOption);
    difficultButtonElement.disabled = true;
    (document.body.querySelector(`.learn-button-${word}`) as HTMLButtonElement).disabled = true;
    checkStatusPage();
  });
};

export const showArea = async (word: string, idWord: string, idUser: string, arrayOfUserWords: [IUserWord]) => {
  const areaButtonOFlearnedAndHeavyWordElement = document.getElementById(`area-${idWord}`);
  areaButtonOFlearnedAndHeavyWordElement?.classList.remove(hiddenClassName);

  toggleLearnButton(word, idWord, idUser);
  toggleDifficultButton(word, idWord, idUser);

  arrayOfUserWords.forEach((wordOfUser: IUserWord) => {
    if (wordOfUser.optional.word === word) {
      if (wordOfUser.difficulty === markOfDifficultWord) {
        document.body.querySelector(`.difficult-button-${word}`)?.classList.add(difficultClassName);
        (document.body.querySelector(`.learn-button-${word}`) as HTMLButtonElement).disabled = true;
        (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
      }

      if (wordOfUser.optional.learn === markOfLearnedWord) {
        document.body.querySelector(`.learn-button-${word}`)?.classList.add(studiedClassName);
        (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
      }
    }
  });
};
