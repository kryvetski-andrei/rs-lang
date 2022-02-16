import { IAudioCallQuestion } from '../../../../interfaces';
import { answersContainer } from '../../config';
import { audioDataAttribute, playAudioIconClassName, variantItemClassName } from '../config';

const getQestionVariantDOMElement = (qestionVariant: string) => {
  const variantDOMElement = document.createElement('button');
  variantDOMElement.classList.add(`${variantItemClassName}`);
  variantDOMElement.innerText = qestionVariant;
  return variantDOMElement;
};

export const mountQuestionVariantsDOMelements = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  document.body
    .querySelector(`.${playAudioIconClassName}`)
    ?.setAttribute(`${audioDataAttribute}`, `${quizVariants[currentQuestion].audio}`);
  const { variants } = quizVariants[currentQuestion];
  (document.body.querySelector(`.${answersContainer}`) as HTMLElement).innerHTML = '';
  variants.forEach((variant) => {
    document.body
      .querySelector(`.${answersContainer}`)
      ?.insertAdjacentElement('beforeend', getQestionVariantDOMElement(variant));
  });
};
