import { IAudioCallQuestion, IWord } from "../../../interfaces";
import { getFirstElementsOfArray } from "../utils/firstElements";
import { shuffle } from "../utils/shuffle";
import { QUESTIONS_COUNT, WRONG_VARIANTS_COUNT } from "./config";


const getRandomvariants = (wordsData: Array<IWord>, rightAnswer: string, index: number): Array<string> => {
    const array = wordsData.map(({wordTranslate}) => wordTranslate);
    array.splice(index, 1);
    shuffle(array);
    const variants = getFirstElementsOfArray(array, WRONG_VARIANTS_COUNT);
    variants.push(rightAnswer)
    shuffle(variants);
    return variants;
}

export const generateQuizQuestions = (wordsData: Array<IWord>): Array<IAudioCallQuestion> => {
    shuffle(wordsData);
    return wordsData.splice(0, QUESTIONS_COUNT).map(({audio, wordTranslate, word}, index) => {
        return {
            audio,
            rightAnswer: wordTranslate,
            variants: getRandomvariants(wordsData, wordTranslate, index),
            wordsPair: `${word} — ${wordTranslate}`,
        }
  })
}