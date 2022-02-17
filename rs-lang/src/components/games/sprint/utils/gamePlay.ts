import { IPair } from '../../../../interfaces';
import { playAnswerSound } from '../../utils/playAnswerSound';
import { wordTranslation } from '../config';

let currentPair = 0;

export const showCurrentPair = (wordPairs: Array<IPair>) => {
  (document.body.querySelector(`.${wordTranslation}`) as HTMLElement).innerHTML = `${wordPairs[currentPair].wordsPair}`;
};

export const setAnswer = (wordPairs: Array<IPair>, userAnswer: string) => {
  wordPairs[currentPair].userCorrect = String(wordPairs[currentPair].isPairRight) === userAnswer;
  playAnswerSound(wordPairs[currentPair].userCorrect as boolean);
  currentPair += 1;
  showCurrentPair(wordPairs);
};
