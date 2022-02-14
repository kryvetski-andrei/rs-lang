import { IWord } from "../../../interfaces"
import { maxWordsCount } from "../sprint/config"


export const getRandomTranslation = (wordsData:Array<IWord>, index = maxWordsCount): string => {
  if(index === 0 || index === maxWordsCount - 1){
    return wordsData[Math.floor(Math.random() * (maxWordsCount - index)) + index].wordTranslate
  }
  return wordsData[Math.floor(Math.random() * index)].wordTranslate
}