import { IAudioCallQuestion } from '../../../../interfaces';
import { renderMarkup } from '../../../../utilities/renderMarkup';
import { audioCallGameMarkup } from '../markup';
import { mountQuestionVariantsDOMelements } from './pushVariants';

export const renderAudioCallGame = (
  audioCallContainer: HTMLElement,
  quizVariants: Array<IAudioCallQuestion>,
  currentQuestion: number
) => {
  audioCallContainer.innerHTML = '';
  renderMarkup(audioCallContainer, audioCallGameMarkup);
  mountQuestionVariantsDOMelements(quizVariants, currentQuestion);
};
