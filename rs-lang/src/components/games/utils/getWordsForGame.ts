import { IWord, IWordDictionaryElement } from '../../../interfaces';
import { getUserAggregatedHardWords, getUserWord, getUserWords, getWords } from '../../../utilities/api';
import { userDataLocalStorage } from '../../../utilities/api/config';
import {
  dictionaryPageName,
  gamesPageName,
  groupOfBook,
  pageOfBook,
  previousPage,
  schoolbookPageName,
} from '../config';
import { getCurrentGroupOfWords } from './getCurrentGroup';
import { parseDictionaryElement } from './parseDictionaryElement';

export const getWordsForGame = async (): Promise<any> => {
  const { userId } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`) as string);
  console.log(localStorage.getItem(previousPage));
  if (localStorage.getItem(previousPage) === gamesPageName) {
    return getWords(1, getCurrentGroupOfWords());
  }
  if (localStorage.getItem(previousPage) === schoolbookPageName) {
    const wordsOfPage = await getWords(
      Number(localStorage.getItem(pageOfBook)),
      Number(localStorage.getItem(groupOfBook))
    );
    const userWords = await getUserWords(userId);

    const wordsForGame = wordsOfPage.filter((wordOfPage: any) => {
      for (const userWord of userWords) {
        if (wordOfPage.id === userWord.wordId && userWord.optional.learn === 'learn') {
          return false;
        }
      }
      return true;
    });
    console.log(wordsForGame);
    return wordsForGame;
  }
  if (localStorage.getItem(previousPage) === dictionaryPageName) {
    console.log(localStorage.getItem(previousPage));
    console.log(userId);
    const tet = await getUserAggregatedHardWords(userId);
    const out: Array<IWord> = tet[0].paginatedResults.map((dictionaryElement: IWordDictionaryElement) => {
      return parseDictionaryElement(dictionaryElement);
    });
    console.log(out);
    return out;
  }
};
