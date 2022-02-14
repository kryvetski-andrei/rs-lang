import { IAudioCallQuestion } from '../../../../interfaces';
import { answersContainer } from '../../config';
import { playAudioIconClassName } from '../config';

export const pushVariants = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  document.body
    .querySelector(`.${playAudioIconClassName}`)
    ?.setAttribute('data-audio', `${quizVariants[currentQuestion].audio}`);
  const { variants } = quizVariants[currentQuestion];
  (document.body.querySelector(`.${answersContainer}`) as HTMLElement).innerHTML = '';
  variants.forEach((elem) => {
    const variant = document.createElement('button');
    variant.classList.add('variants');
    variant.innerHTML = elem;
    document.body.querySelector(`.${answersContainer}`)?.insertAdjacentElement('beforeend', variant);
  });
};
