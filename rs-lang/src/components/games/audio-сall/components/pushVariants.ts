import { IAudioCallQuestion } from '../../../../interfaces';
import { answersContainer } from '../../config';
import { playAudioIconClassName } from '../config';

const createuQestionVariantDOMElement = (qestionVariant: string) => {
  const variantDOMElement = document.createElement('button');
  variantDOMElement.classList.add('variants');
  variantDOMElement.innerHTML = qestionVariant;
  return variantDOMElement;
};

export const mountQuestionVariantsDOMelements = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  document.body
    .querySelector(`.${playAudioIconClassName}`)
    ?.setAttribute('data-audio', `${quizVariants[currentQuestion].audio}`);
  const { variants } = quizVariants[currentQuestion];
  (document.body.querySelector(`.${answersContainer}`) as HTMLElement).innerHTML = '';
  variants.forEach((elem) => {
    document.body
      .querySelector(`.${answersContainer}`)
      ?.insertAdjacentElement('beforeend', createuQestionVariantDOMElement(elem));
  });
};
