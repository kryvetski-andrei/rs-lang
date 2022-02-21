import { IAudioCallQuestion, IPair } from '../../../interfaces';
import { deleteUserWord, getUserWord, postUsersWords } from '../../../utilities/api';
import { markOfDifficultWord, markOfLearnedWord, markOfNot } from '../../config';
import { isUserWord } from './isUserWord';

export const setLearnStatus = async (
  wordPair: IPair | IAudioCallQuestion,
  userId: string,
  wordId: string,
  word: string
) => {
  if (wordPair.userCorrect) {
    console.log(wordPair.userCorrect);
    console.log(userId);
    console.log(wordId);
    console.log(word);

    const learnOption = { difficulty: markOfNot, optional: { learn: markOfLearnedWord, word } };
    if (await isUserWord(wordId, userId)) {
      const { optional } = await getUserWord(userId, wordId);
      if (optional.learn === 'no') {
        await deleteUserWord(userId, wordId);
        await postUsersWords(userId, wordId, learnOption);
      }
    } else {
      await postUsersWords(userId, wordId, learnOption);
    }
  } else {
    const difficultOption = { difficulty: markOfDifficultWord, optional: { learn: markOfNot, word } };
    if (await isUserWord(wordId, userId)) {
      const { optional } = await getUserWord(userId, wordId);
      if (optional.learn === 'learn') {
        await deleteUserWord(userId, wordId);
        await postUsersWords(userId, wordId, difficultOption);
      }
    } else {
      await postUsersWords(userId, wordId, difficultOption);
    }
  }
};
