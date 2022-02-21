import { IPair, IWord } from '../../../../interfaces';
import { getRandomTranslation } from '../../utils/getRandomTranslation';
import { shuffle } from '../../utils/shuffle';

export const generatePairs = (wordsData: Array<IWord>): Array<IPair> => {
  const wordsPpairs: Array<IPair> = [];
  wordsData.forEach(({ id, audio, word, wordTranslate }, index) => {
    if (Math.random() < 0.5) {
      wordsPpairs.push({ id, audio, wordsPair: `${word} — ${wordTranslate}`, isPairRight: true });
    } else {
      wordsPpairs.push({
        id,
        audio,
        wordsPair: `${word} — ${getRandomTranslation(wordsData, index)}`,
        isPairRight: false,
      });
    }
  });
  shuffle(wordsPpairs);
  return wordsPpairs;
};
