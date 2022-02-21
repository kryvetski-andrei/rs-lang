import { IAudioCallQuestion } from '../../../../interfaces';
import { falseAnswerClassName, trueAnswerClassName } from '../../sprint/config';
import { rightAnswerViewerClassName, variantItemClassName } from '../config';

export const showRightAnswer = ({ rightAnswer, userCorrect }: IAudioCallQuestion, targetElement: Element) => {
  const answersContainers = document.body.querySelector(`.${rightAnswerViewerClassName}`) as HTMLElement;
  answersContainers.innerHTML = rightAnswer;
  document.body.querySelectorAll(`.${variantItemClassName}`).forEach((answer) => {
    if (targetElement === answer && !userCorrect) {
      answer.classList.add(`${falseAnswerClassName}`);
    }
    if (answer.innerHTML === rightAnswer) {
      answer.classList.add(`${trueAnswerClassName}`);
    }
  });
};
