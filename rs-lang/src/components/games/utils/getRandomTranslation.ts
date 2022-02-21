import { IWord } from '../../../interfaces';

export const getRandomTranslation = (wordsData: Array<IWord>, index = wordsData.length): string => {
  if (index === 0 || index === wordsData.length - 1) {
    return wordsData[Math.floor(Math.random() * (wordsData.length - index)) + index].wordTranslate;
  }
  return wordsData[Math.floor(Math.random() * index)].wordTranslate;
};
