import { IAudioCallQuestion } from '../../../interfaces';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainerClassName, startGameButton } from '../config';
import { showResults } from '../sprint/utils/endGame';
import { getWordsForGame } from '../utils/getWordsForGame';
import { playAnswerSound } from '../utils/playAnswerSound';
import { mountQuestionVariantsDOMelements } from './components/pushVariants';
import { renderAudioCallGame } from './components/renderAudioCallGame';
import { showRightAnswer } from './components/showRightAnswer';
import {
  audioCallPageId,
  audioDataAttribute,
  playAudioIconClassName,
  QUESTIONS_COUNT,
  rightAnswerViewerClassName,
} from './config';
import { audioCallPageMarkup } from './markup';
import { disableQuestionVariants } from './utils/disableButtons';
import { generateQuizQuestions } from './utils/generateQuestions';
import { playAudio } from './utils/playAudio';

const setAnswer = async (currentQuestion: IAudioCallQuestion, target: HTMLElement) => {
  currentQuestion.userCorrect = currentQuestion.rightAnswer === target.innerHTML;
  playAnswerSound(currentQuestion.userCorrect);
};

const changeQuestion = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  (document.body.querySelector(`.${rightAnswerViewerClassName}`) as HTMLElement).innerHTML = '';
  mountQuestionVariantsDOMelements(quizVariants, currentQuestion);
  playAudio(document.body.querySelector(`.${playAudioIconClassName}`)?.getAttribute(`${audioDataAttribute}`) as string);
};

const startGameAudioGame = async () => {
  let currentQuestion = 0;
  const quizVariants = generateQuizQuestions(await getWordsForGame());
  const audioCallContainer = document.body.querySelector(`#${audioCallPageId}`) as HTMLElement;
  renderAudioCallGame(audioCallContainer, quizVariants, currentQuestion);

  const audioButton = document.body.querySelector(`.${playAudioIconClassName}`);

  playAudio(audioButton?.getAttribute(`${audioDataAttribute}`) as string);

  audioCallContainer.querySelector(`.${playAudioIconClassName}`)?.addEventListener('click', () => {
    playAudio(audioButton?.getAttribute(`${audioDataAttribute}`) as string);
  });

  audioCallContainer.querySelector(`.${answersContainerClassName}`)?.addEventListener('click', async ({ target }) => {
    const targetElement = target as HTMLElement;
    if (targetElement.tagName === 'BUTTON') {
      if (currentQuestion === QUESTIONS_COUNT - 1) {
        setAnswer(quizVariants[currentQuestion], targetElement);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
      } else {
        setAnswer(quizVariants[currentQuestion], targetElement);
        showRightAnswer(quizVariants[currentQuestion], targetElement);
        disableQuestionVariants();
        currentQuestion += 1;
        setTimeout(() => {
          changeQuestion(quizVariants, currentQuestion);
        }, 3000);
      }
    }
  });
};

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameAudioGame, { once: true });
};
