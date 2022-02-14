import { IPair } from '../../../../interfaces';
import { wordTranslation } from '../config';

let currentPair = 0;

export const showCurrentPair = (wordPairs: Array<IPair>) => {
  (document.body.querySelector(`.${wordTranslation}`) as HTMLElement).innerHTML = `${wordPairs[currentPair].wordsPair}`;
};

export const setAnswer = (wordPairs: Array<IPair>, userAnswer: string) => {
  if (String(wordPairs[currentPair].isPairRight) === userAnswer) {
    wordPairs[currentPair].userCorrect = true;
  } else {
    wordPairs[currentPair].userCorrect = false;
  }
  currentPair += 1;
  showCurrentPair(wordPairs);
};
