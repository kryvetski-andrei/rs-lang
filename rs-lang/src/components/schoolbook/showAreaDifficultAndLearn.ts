import { IUserWord } from '../../interfaces';
import { deleteUserWord, getUserStatistics, postUsersWords, updateUserStatistics } from '../../utilities/api';
import {
  difficultClassName,
  hiddenClassName,
  markOfDifficultWord,
  markOfLearnedWord,
  markOfNot,
  studiedClassName,
} from '../config';

export const toggleLearnButton = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.learn-button-${word}`)?.addEventListener('click', async ({ target }) => {
    const learnButtonElement = target as HTMLButtonElement;
    if (learnButtonElement.classList.contains(studiedClassName)) {
      learnButtonElement.classList.remove(studiedClassName);
      await deleteUserWord(idUser, idWord);
      const statisticsData = await getUserStatistics(idUser);
      const userLearnerdWords = statisticsData.learnedWords - 1;
      statisticsData.learnedWords = userLearnerdWords;
      const date = new Date().toLocaleDateString('ru-RU');
      const index = statisticsData.optional.learnedWordsPerDay[date].indexOf(idWord);
      if (index !== -1) {
        statisticsData.optional.learnedWordsPerDay[date].splice(index, 1);
      }
      statisticsData.optional.learnedWordsPerDay[date].filter((word: string) => word !== idWord);
      delete statisticsData.id;
      await updateUserStatistics(idUser, statisticsData);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = false;
    } else {
      learnButtonElement.classList.add(studiedClassName);
      const learnOption = { difficulty: markOfNot, optional: { learn: markOfLearnedWord, word } };
      await postUsersWords(idUser, idWord, learnOption);

      //
      const statisticsData = await getUserStatistics(idUser);
      const userLearnerdWords = statisticsData.learnedWords + 1;
      statisticsData.learnedWords = userLearnerdWords;
      const date = new Date().toLocaleDateString('ru-RU');
      if (statisticsData.optional.learnedWordsPerDay[date]) {
        statisticsData.optional.learnedWordsPerDay[date].push(idWord);
      } else {
        statisticsData.optional.learnedWordsPerDay[date] = [idWord];
      }
      delete statisticsData.id;
      await updateUserStatistics(idUser, statisticsData);
      (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
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
