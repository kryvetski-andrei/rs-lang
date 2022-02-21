import { IPair } from '../../../../interfaces';
import { deleteUserWord, getUserWord, postUsersWords } from '../../../../utilities/api';
import { userDataLocalStorage } from '../../../../utilities/api/config';
import { markOfDifficultWord, markOfLearnedWord, markOfNot } from '../../../config';
import { isHardWord } from '../../utils/isHardWord';
import { isUserWord } from '../../utils/isUserWord';
import { playAnswerSound } from '../../utils/playAnswerSound';
import { wordTranslation } from '../config';

export const showCurrentPair = ({ wordsPair }: IPair) => {
  (document.body.querySelector(`.${wordTranslation}`) as HTMLElement).innerHTML = `${wordsPair}`;
};

export const setAnswer = async (wordPair: IPair, userAnswer: string) => {
  const { id, word } = wordPair;
  console.log(wordPair);
  const { userId } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`) as string);
  wordPair.userCorrect = String(wordPair.isPairRight) === userAnswer;
  if (wordPair.userCorrect) {
    const learnOption = { difficulty: markOfNot, optional: { learn: markOfLearnedWord, word } };
    if (await isUserWord(id, userId)) {
      const { optional } = await getUserWord(userId, id);
      if (optional.learn === 'no') {
        await deleteUserWord(userId, id);
        await postUsersWords(userId, id, learnOption);
      }
    } else {
      await postUsersWords(userId, id, learnOption);
    }
  } else {
    const difficultOption = { difficulty: markOfDifficultWord, optional: { learn: markOfNot, word } };
    if (await isUserWord(id, userId)) {
      const { optional } = await getUserWord(userId, id);
      if (optional.learn === 'learn') {
        await deleteUserWord(userId, id);
        await postUsersWords(userId, id, difficultOption);
      }
    } else {
      await postUsersWords(userId, id, difficultOption);
    }
  }

  playAnswerSound(wordPair.userCorrect as boolean);
};
