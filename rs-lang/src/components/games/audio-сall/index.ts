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
  nextQuestionButtonClassName,
  playAudioIconClassName,
  rightAnswerViewerClassName,
  variantItemClassName,
} from './config';
import { audioCallPageMarkup } from './markup';
import { disableQuestionVariants } from './utils/disableButtons';
import { generateQuizQuestions } from './utils/generateQuestions';
import { playAudio } from './utils/playAudio';
import { getUserStatistics } from '../../../utilities/api';
import { TokenService } from '../../../utilities/api/utilities';
import { setLearnStatus } from '../utils/setLearnStatus';

const setAnswer = async (currentQuestion: IAudioCallQuestion, target: HTMLElement) => {
  const { userId } = TokenService.getUser();
  const userStatistics = await getUserStatistics(userId);
  const { id, rightAnswer } = currentQuestion;

  currentQuestion.userCorrect = currentQuestion.rightAnswer === target.innerHTML;
  playAnswerSound(currentQuestion.userCorrect);
  setLearnStatus(currentQuestion, userId, id, rightAnswer);
  setNewWord(userStatistics, currentQuestion);
  setAudioCallGameStat(userStatistics, currentQuestion);
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

  audioCallContainer.querySelector(`.${nextQuestionButtonClassName}`)?.addEventListener('click', () => {
    changeQuestion(quizVariants, currentQuestion);
    document.body.querySelector(`.${nextQuestionButtonClassName}`)?.classList.toggle('hide');
  });

  audioCallContainer.querySelector(`.${answersContainerClassName}`)?.addEventListener('click', async ({ target }) => {
    const { userId } = TokenService.getUser();
    const userStatistics = await getUserStatistics(userId);
    const targetElement = target as HTMLElement;
    if (targetElement.tagName === 'BUTTON') {
      if (currentQuestion === quizVariants.length - 1) {
        await setAnswer(quizVariants[currentQuestion], targetElement);
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
        setAudioCallBestSeries(userStatistics, audioCallRsults);
      } else {
        await setAnswer(quizVariants[currentQuestion], targetElement);
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        showRightAnswer(quizVariants[currentQuestion], targetElement);
        disableQuestionVariants();
        document.body.querySelector(`.${nextQuestionButtonClassName}`)?.classList.toggle('hide');
        currentQuestion += 1;
      }
    }
  });

  window.addEventListener('keyup', async (e) => {
    const { userId } = TokenService.getUser();
    const userStatistics = await getUserStatistics(userId);
    const answerElements = document.body.querySelectorAll(`.${variantItemClassName}`);
    const userAnswerNumber = (e.code.match(/[1-4]$/) as Array<any>)[0];
    if (userAnswerNumber) {
      if (currentQuestion === quizVariants.length - 1) {
        await setAnswer(quizVariants[currentQuestion], answerElements[userAnswerNumber - 1] as HTMLElement);
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
        setAudioCallBestSeries(userStatistics, audioCallRsults);
      } else {
        await setAnswer(quizVariants[currentQuestion], answerElements[userAnswerNumber - 1] as HTMLElement);
        setResults(audioCallRsults, quizVariants[currentQuestion]);
        showRightAnswer(quizVariants[currentQuestion], answerElements[userAnswerNumber - 1] as HTMLElement);
        document.body.querySelector(`.${nextQuestionButtonClassName}`)?.classList.toggle('hide');
        disableQuestionVariants();
        currentQuestion += 1;
      }
    }
  });
};

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameAudioGame, { once: true });
};
