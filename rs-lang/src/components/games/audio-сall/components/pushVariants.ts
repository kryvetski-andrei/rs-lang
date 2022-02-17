import { IAudioCallQuestion } from '../../../../interfaces';
import { answersContainerClassName } from '../../config';
import { audioDataAttribute, playAudioIconClassName, variantItemClassName } from '../config';

const getQestionVariantDOMElement = (qestionVariant: string) => {
  const variantDOMElement = document.createElement('button');
  variantDOMElement.classList.add(`${variantItemClassName}`);
  variantDOMElement.innerText = qestionVariant;
  return variantDOMElement;
};

export const mountQuestionVariantsDOMelements = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  const answersContainers = document.body.querySelector(`.${answersContainerClassName}`) as HTMLElement;
  answersContainers.innerHTML = '';
  document.body
    .querySelector(`.${playAudioIconClassName}`)
    ?.setAttribute(`${audioDataAttribute}`, `${quizVariants[currentQuestion].audio}`);
  const { variants } = quizVariants[currentQuestion];
  variants.forEach((variant) => {
    answersContainers?.insertAdjacentElement('beforeend', getQestionVariantDOMElement(variant));
  });
};
