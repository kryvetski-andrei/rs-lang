import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainerClassName, startGameButton } from '../config';
import { sprintGameMarkup, sprintPageMarkup } from './markup';
import { sprintPageId, TIMER_DURATION } from './config';
import { showResults } from './utils/endGame';
import { setCountdown } from './utils/timer';
import { generatePairs } from './utils/getWordsPairs';
import { setAnswer, showCurrentPair } from './utils/gamePlay';
import { getWordsForGame } from '../utils/getWordsForGame';
import { IPair, IResults } from '../../../interfaces';
import { setResults } from '../utils/setResults';
import { setNewWord, setSprintBestSeries, setSprintGameStat } from '../utils/setStatistics';
import { TokenService } from '../../../utilities/api/utilities';
import { getUserStatistics } from '../../../utilities/api';
import { cleanUp } from '../../../utilities/cleanUp';

const stopGame = async (wordPairs: Array<IPair>, sprintContainer: HTMLElement, sprintRsults: IResults) => {
  const { userId } = TokenService.getUser();
  const userStatistics = await getUserStatistics(userId);
  showResults(wordPairs, sprintContainer);
  setSprintBestSeries(userStatistics, sprintRsults);
};

const startGameSprintGame = async () => {
  let currentPair = 0;
  const sprintRsults: IResults = {
    words: [],
    bestSeries: 0,
    currentSeries: 0,
  };
  const sprintContainer = document.body.querySelector(`#${sprintPageId}`) as HTMLElement;
  cleanUp(sprintContainer);
  renderMarkup(sprintContainer, sprintGameMarkup);
  setCountdown();
  const wordPairs = generatePairs(await getWordsForGame());
  showCurrentPair(wordPairs[currentPair]);
  const timeOutId = setTimeout(async () => {
    stopGame(wordPairs, sprintContainer, sprintRsults);
    currentPair = 0;
  }, TIMER_DURATION);

  window.addEventListener('hashchange', async () => {
    clearTimeout(timeOutId);
    const { userId } = TokenService.getUser();
    const userStatistics = await getUserStatistics(userId);
    setSprintBestSeries(userStatistics, sprintRsults);
    currentPair = 0;
  });

  document.body.querySelector(`.${answersContainerClassName}`)?.addEventListener('click', async ({ target }) => {
    const { userId } = TokenService.getUser();
    const userStatistics = await getUserStatistics(userId);

    if ((target as Element).tagName === 'BUTTON') {
      setAnswer(wordPairs[currentPair], (target as Element).className);
      setResults(sprintRsults, wordPairs[currentPair]);
      setNewWord(userStatistics, wordPairs[currentPair]);
      setSprintGameStat(userStatistics, wordPairs[currentPair]);
      currentPair += 1;
      if (currentPair === wordPairs.length) {
        clearTimeout(timeOutId);
        stopGame(wordPairs, sprintContainer, sprintRsults);
        currentPair = 0;
      }
      showCurrentPair(wordPairs[currentPair]);
    }
  });

  window.addEventListener('keyup', async (e) => {
    const { userId } = TokenService.getUser();
    const userStatistics = await getUserStatistics(userId);
    if (e.code === 'ArrowRight') {
      setAnswer(wordPairs[currentPair], 'true');
      setResults(sprintRsults, wordPairs[currentPair]);
      setNewWord(userStatistics, wordPairs[currentPair]);
      setSprintGameStat(userStatistics, wordPairs[currentPair]);
      currentPair += 1;
      if (currentPair === wordPairs.length) {
        clearTimeout(timeOutId);
        stopGame(wordPairs, sprintContainer, sprintRsults);
        currentPair = 0;
      }
      showCurrentPair(wordPairs[currentPair]);
    }
    if (e.code === 'ArrowLeft') {
      setAnswer(wordPairs[currentPair], 'false');
      setResults(sprintRsults, wordPairs[currentPair]);
      setNewWord(userStatistics, wordPairs[currentPair]);
      setSprintGameStat(userStatistics, wordPairs[currentPair]);
      currentPair += 1;
      if (currentPair === wordPairs.length) {
        clearTimeout(timeOutId);
        stopGame(wordPairs, sprintContainer, sprintRsults);
        currentPair = 0;
      }
      showCurrentPair(wordPairs[currentPair]);
    }
  });
};

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameSprintGame, { once: true });
};
