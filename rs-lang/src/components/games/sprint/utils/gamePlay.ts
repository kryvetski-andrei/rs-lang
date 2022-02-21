import { IPair } from '../../../../interfaces';
import { deleteUserWord, getUserWord, postUsersWords } from '../../../../utilities/api';
import { userDataLocalStorage } from '../../../../utilities/api/config';
import { markOfDifficultWord, markOfLearnedWord, markOfNot } from '../../../config';
import { isUserWord } from '../../utils/isUserWord';
import { playAnswerSound } from '../../utils/playAnswerSound';
import { setLearnStatus } from '../../utils/setLearnStatus';
import { wordTranslation } from '../config';

export const showCurrentPair = ({ wordsPair }: IPair) => {
  (document.body.querySelector(`.${wordTranslation}`) as HTMLElement).innerHTML = `${wordsPair}`;
};

export const setAnswer = async (wordPair: IPair, userAnswer: string) => {
  const { id, word } = wordPair;
  console.log(wordPair);
  const { userId } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`) as string);
  wordPair.userCorrect = String(wordPair.isPairRight) === userAnswer;
  await setLearnStatus(wordPair, userId, id, word);

  playAnswerSound(wordPair.userCorrect as boolean);
};
