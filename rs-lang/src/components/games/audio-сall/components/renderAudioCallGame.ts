import { IAudioCallQuestion } from '../../../../interfaces';
import { cleanUp } from '../../../../utilities/cleanUp';
import { renderMarkup } from '../../../../utilities/renderMarkup';
import { audioCallGameMarkup } from '../markup';
import { mountQuestionVariantsDOMelements } from './pushVariants';

export const renderAudioCallGame = (
  audioCallContainer: HTMLElement,
  quizVariants: Array<IAudioCallQuestion>,
  currentQuestion: number
) => {
  cleanUp(audioCallContainer);
  renderMarkup(audioCallContainer, audioCallGameMarkup);
  mountQuestionVariantsDOMelements(quizVariants, currentQuestion);
};
