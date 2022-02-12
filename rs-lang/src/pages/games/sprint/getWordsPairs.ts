import { IPair, IWord } from "../../../interfaces";
import { maxWordsCount } from "./config";

const shuffle = (array: Array<IPair>) => {
    array.sort(() => Math.random() - 0.5);
}

const getRandomTranslation = (wordsData:Array<IWord>, index: number): string => {
  if(index === 0 || index === maxWordsCount - 1){
    return wordsData[Math.floor(Math.random() * (maxWordsCount - index)) + index].wordTranslate
  }
  return wordsData[Math.floor(Math.random() * index)].wordTranslate
}

export const generatePairs = (wordsData: Array<IWord>): Array<IPair> => {
  const wordsPpairs: Array<IPair> = [];
  wordsData.forEach(({word, wordTranslate}, index) => {
    if (Math.random() < 0.5){
      wordsPpairs.push({wordsPair:`${word} — ${wordTranslate}`, isPairRight: true});
    } else {
      wordsPpairs.push({wordsPair:`${word} — ${getRandomTranslation(wordsData, index)}`, isPairRight: false});
    }
  });
  shuffle(wordsPpairs);
  return wordsPpairs;
}