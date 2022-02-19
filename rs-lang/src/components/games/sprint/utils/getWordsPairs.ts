import { IPair, IWord } from '../../../../interfaces';
import { getRandomTranslation } from '../../utils/getRandomTranslation';
import { shuffle } from '../../utils/shuffle';

export const generatePairs = (wordsData: Array<IWord>): Array<IPair> => {
  const wordsPpairs: Array<IPair> = [];
  wordsData.forEach(({ id, word, wordTranslate }, index) => {
    if (Math.random() < 0.5) {
      wordsPpairs.push({ id, wordsPair: `${word} — ${wordTranslate}`, isPairRight: true });
    } else {
      wordsPpairs.push({ id, wordsPair: `${word} — ${getRandomTranslation(wordsData, index)}`, isPairRight: false });
    }
  });
  shuffle(wordsPpairs);
  return wordsPpairs;
};
