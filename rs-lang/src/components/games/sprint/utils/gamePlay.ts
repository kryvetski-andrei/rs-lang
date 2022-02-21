import { IPair } from '../../../../interfaces';
import { playAnswerSound } from '../../utils/playAnswerSound';
import { wordTranslation } from '../config';

export const showCurrentPair = ({ wordsPair }: IPair) => {
  (document.body.querySelector(`.${wordTranslation}`) as HTMLElement).innerHTML = `${wordsPair}`;
};

export const setAnswer = (wordPair: IPair, userAnswer: string) => {
  wordPair.userCorrect = String(wordPair.isPairRight) === userAnswer;
  playAnswerSound(wordPair.userCorrect as boolean);
};
