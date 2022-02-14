import { IPair, IWord } from '../../../interfaces';

export const shuffle = (array: Array<IPair | IWord | string>) => {
  array.sort(() => Math.random() - 0.5);
};
