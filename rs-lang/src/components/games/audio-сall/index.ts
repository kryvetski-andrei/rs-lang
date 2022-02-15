import { IAudioCallQuestion } from '../../../interfaces';
import { getWords } from '../../../utilities/api';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainer, startGameButton } from '../config';
import { showResults } from '../sprint/utils/endGame';
import { getCurrentGroupOfWords } from '../utils/getCurrentGroup';
import { mountQuestionVariantsDOMelements } from './components/pushVariants';
import { renderAudioCallGame } from './components/renderAudioCallGame';
import { audioCallPageId, audioDataAttribute, playAudioIconClassName, QUESTIONS_COUNT } from './config';
import { audioCallPageMarkup } from './markup';
import { generateQuizQuestions } from './utils/generateQuestions';
import { playAudio } from './utils/playAudio';

const setAnswer = async (currentQuestion: IAudioCallQuestion, target: HTMLElement) => {
  currentQuestion.userCorrect = currentQuestion.rightAnswer === target.innerHTML;
};

const changeQuestion = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  mountQuestionVariantsDOMelements(quizVariants, currentQuestion);
  playAudio(document.body.querySelector(`.${playAudioIconClassName}`)?.getAttribute(`${audioDataAttribute}`) as string);
};

const startGame = async () => {
  let currentQuestion = 0;
  const quizVariants = generateQuizQuestions(await getWords(1, getCurrentGroupOfWords()));
  const audioCallContainer = document.body.querySelector(`#${audioCallPageId}`) as HTMLElement;
  renderAudioCallGame(audioCallContainer, quizVariants, currentQuestion);

  const audioButton = document.body.querySelector(`.${playAudioIconClassName}`);

  playAudio(audioButton?.getAttribute(`${audioDataAttribute}`) as string);

  audioCallContainer.querySelector(`.${playAudioIconClassName}`)?.addEventListener('click', () => {
    playAudio(audioButton?.getAttribute(`${audioDataAttribute}`) as string);
  });

  audioCallContainer.querySelector(`.${answersContainer}`)?.addEventListener('click', async ({ target }) => {
    const targetElement = target as HTMLElement;
    if (targetElement.tagName === 'BUTTON') {
      if (currentQuestion === QUESTIONS_COUNT - 1) {
        setAnswer(quizVariants[currentQuestion], targetElement);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
      } else {
        setAnswer(quizVariants[currentQuestion], targetElement);
        currentQuestion += 1;
        changeQuestion(quizVariants, currentQuestion);
      }
    }
  });
};

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup);
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGame, { once: true });
};
