import { IAudioCallQuestion, IResults } from '../../../interfaces';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainerClassName, startGameButton } from '../config';
import { showResults } from '../sprint/utils/endGame';
import { getWordsForGame } from '../utils/getWordsForGame';
import { playAnswerSound } from '../utils/playAnswerSound';
import { setAudioCallBestSeries, setAudioCallGameStat, setNewWord } from '../utils/setStatistics';
import { setResults } from '../utils/setResults';
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
import { initialStatistics } from '../utils/initialStatistics';

const setAnswer = async (currentQuestion: IAudioCallQuestion, target: HTMLElement) => {
  currentQuestion.userCorrect = currentQuestion.rightAnswer === target.innerHTML;
  playAnswerSound(currentQuestion.userCorrect);
  setNewWord(initialStatistics, currentQuestion);
  setAudioCallGameStat(initialStatistics, currentQuestion);
};

const changeQuestion = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  (document.body.querySelector(`.${rightAnswerViewerClassName}`) as HTMLElement).innerHTML = '';
  mountQuestionVariantsDOMelements(quizVariants, currentQuestion);
  playAudio(document.body.querySelector(`.${playAudioIconClassName}`)?.getAttribute(`${audioDataAttribute}`) as string);
};

const startGameAudioGame = async () => {
  const audioCallRsults: IResults = {
    words: [],
    bestSeries: 0,
    currentSeries: 0,
  };
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
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
        setAudioCallBestSeries(initialStatistics, audioCallRsults);
        console.log(initialStatistics);
      } else {
        setAnswer(quizVariants[currentQuestion], targetElement);
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        showRightAnswer(quizVariants[currentQuestion], targetElement);
        disableQuestionVariants();
        currentQuestion += 1;
        setTimeout(() => {
          changeQuestion(quizVariants, currentQuestion);
        }, 3000);
      }
      console.log(audioCallRsults);
    }
  });
};

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameAudioGame, { once: true });
};
