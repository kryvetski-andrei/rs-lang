import { IWord, IWordDictionaryElement } from '../../../interfaces';
import { getUserAggregatedHardWords, getWords } from '../../../utilities/api';
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
  console.log(localStorage.getItem(previousPage));
  if (localStorage.getItem(previousPage) === gamesPageName) {
    return getWords(1, getCurrentGroupOfWords());
  }
  if (localStorage.getItem(previousPage) === schoolbookPageName) {
    const test = await getWords(Number(localStorage.getItem(pageOfBook)), Number(localStorage.getItem(groupOfBook)));
    const wordIDs = test.map(({ id }: any) => {
      return id;
    });
    console.log(test);
    return test;
  }
  if (localStorage.getItem(previousPage) === dictionaryPageName) {
    console.log(localStorage.getItem(previousPage));
    const { userId } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`) as string);
    console.log(userId);
    const tet = await getUserAggregatedHardWords(userId);
    const out: Array<IWord> = tet[0].paginatedResults.map((dictionaryElement: IWordDictionaryElement) => {
      return parseDictionaryElement(dictionaryElement);
    })
    console.log(out);
    return out;
  }
};
