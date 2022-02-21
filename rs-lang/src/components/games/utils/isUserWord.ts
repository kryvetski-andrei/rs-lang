import { getUserWord, getUserWords } from '../../../utilities/api';

export const isUserWord = async (gameWordId: string, userId: string) => {
  const userWords = await getUserWords(userId);
  return userWords.some((userWord: any) => {
    return gameWordId === userWord.id;
  });
};
