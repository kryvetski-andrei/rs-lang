import { IWord } from "../../../interfaces"
import { MAX_WORDS_COUNT } from "../sprint/config"


export const getRandomTranslation = (wordsData:Array<IWord>, index = MAX_WORDS_COUNT): string => {
  if(index === 0 || index === MAX_WORDS_COUNT - 1){
    return wordsData[Math.floor(Math.random() * (MAX_WORDS_COUNT - index)) + index].wordTranslate
  }
  return wordsData[Math.floor(Math.random() * index)].wordTranslate
}