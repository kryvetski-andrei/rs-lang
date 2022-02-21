import { getUserWord } from '../../../utilities/api';

export const isUserWord = async (gameWordId: string, userId: string) => {
  try {
    await getUserWord(userId, gameWordId);
    return true;
  } catch {
    return false;
  }
};
