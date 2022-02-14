import { IPair, IWord } from '../../../../interfaces';
import { getRandomTranslation } from '../../utils/getRandomTranslation';
import { shuffle } from '../../utils/shuffle';

export const generatePairs = (wordsData: Array<IWord>): Array<IPair> => {
  const wordsPpairs: Array<IPair> = [];
  wordsData.forEach(({ word, wordTranslate }, index) => {
    if (Math.random() < 0.5) {
      wordsPpairs.push({ wordsPair: `${word} — ${wordTranslate}`, isPairRight: true });
    } else {
      wordsPpairs.push({ wordsPair: `${word} — ${getRandomTranslation(wordsData, index)}`, isPairRight: false });
    }
  });
  shuffle(wordsPpairs);
  return wordsPpairs;
};
